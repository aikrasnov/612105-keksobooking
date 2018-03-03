const {ValidateException} = require(`../exceptions/validate-exception`);
const {SchemeError} = require(`../exceptions/invalid-scheme`);

const validator = (scheme) => {
  return (req, res, next) => {
    const {body} = req;

    const validate = (field, parent = ``) => {
      const errors = [];

      let property;

      // получаем значение вложенного свойства (например, body.offer.price)
      if (parent) {

        let splitedName = parent.split(`.`);
        property = body[splitedName[0]];
        splitedName = splitedName.slice(1);
        splitedName.forEach((name) => {
          property = property[name];
        });

      } else {
        property = body[field.name];
      }


      // Проверяем обязательность поля
      if (typeof property === `undefined` && field.required) {
        errors.push({
          error: `Validation Error`,
          fieldName: field.name,
          errorMessages: `is required`
        });

        // если поля нет, то и проверять больше нечего
        return errors;

        // если поля нет, и оно не обязательное просто выходим
      } else if (typeof property === `undefined`) {
        return errors;

      }

      // проверяем тип поля
      if (field.type && typeof property !== field.type) {

        if (field.type !== `array`) {
          errors.push({
            error: `Validation Error`,
            fieldName: field.name,
            errorMessages: `'${field.name}' should have type '${field.type}'`
          });

          return errors;
        } else if (!Array.isArray(property)) {
          errors.push({
            error: `Validation Error`,
            fieldName: field.name,
            errorMessages: `'${field.name}' should have type '${field.type}'`
          });

          // у поля неправильный тип больше не проверяем ничего
          return errors;
        }
      }

      // проверяем поле на пустоту
      if (field.cantBeEmpty && Object.keys(property).length === 0) {

        if (field.type !== `object`) {
          throw new SchemeError(`canBeEmpty applicable only for object`);
        }

        errors.push({
          error: `Validation Error`,
          fieldName: field.name,
          errorMessages: `should not be empty`
        });

        return errors;
      }

      if (field.shouldHave) {
        for (const prop of field.shouldHave) {
          if (typeof property[prop] === `undefined`) {
            errors.push({
              error: `Validation Error`,
              fieldName: field.name,
              errorMessages: `'${field.name}' should have property '${prop}'`
            });

            return errors;

          }
        }

      }

      if (field.minLength) {

        if (field.type !== `string`) {
          throw new SchemeError(`minLength applicable only for string`);
        }

        if (typeof field.minLength !== `number`) {
          throw new SchemeError(`minLength should be number`);
        }

        if (property.length < field.minLength) {
          errors.push({
            error: `Validation Error`,
            fieldName: field.name,
            errorMessages: `'${field.name}' should have minimum length '${field.minLength}'`
          });

          return errors;
        }
      }

      if (field.maxLength) {

        if (field.type !== `string`) {
          throw new SchemeError(`maxLength applicable only for string`);
        }

        if (typeof field.maxLength !== `number`) {
          throw new SchemeError(`maxLength should be number`);
        }

        if (property.length > field.maxLength) {
          errors.push({
            error: `Validation Error`,
            fieldName: field.name,
            errorMessages: `'${field.name}' should have maximum length '${field.maxLength}'`
          });

          return errors;
        }
      }

      if (field.maximum) {

        if (field.type !== `number`) {
          throw new SchemeError(`maximum applicable only for number`);
        }

        if (typeof field.maximum !== `number`) {
          throw new SchemeError(`maximum should be number`);
        }

        if (property > field.maximum) {
          errors.push({
            error: `Validation Error`,
            fieldName: field.name,
            errorMessages: `'${property}' should have maximum value '${field.maximum}'`
          });

          return errors;
        }
      }

      if (field.minimum) {

        if (field.type !== `number`) {
          throw new SchemeError(`minimum applicable only for number`);
        }

        if (typeof field.minimum !== `number`) {
          throw new SchemeError(`minimum should be number`);
        }

        if (property < field.minimum) {
          errors.push({
            error: `Validation Error`,
            fieldName: field.name,
            errorMessages: `'${property}' should have minimum value '${field.minimum}'`
          });

          return errors;
        }
      }

      if (field.enum) {

        if (!field.enum.includes(property)) {
          errors.push({
            error: `Validation Error`,
            fieldName: field.name,
            errorMessages: `'${property}' should be one of '${field.enum}'`
          });

          return errors;
        }
      }

      if (field.unique) {

        if (field.type !== `array`) {
          throw new SchemeError(`unique applicable only for array`);
        }

        if (new Set(property).size !== property.length) {
          errors.push({
            error: `Validation Error`,
            fieldName: field.name,
            errorMessages: `'${property}' should have only unique elements`
          });

          return errors;
        }

      }

      if (field.eachOneOf) {

        if (field.type !== `array`) {
          throw new SchemeError(`eachOneOf applicable only for array`);
        }

        for (const el of property) {

          if (!field.eachOneOf.includes(el)) {
            errors.push({
              error: `Validation Error`,
              fieldName: field.name,
              errorMessages: `'${el}' from [${property}] should be one of [${field.eachOneOf}]`
            });
          }
        }

        return errors;

      }

      if (field.properties) {
        for (const prop of field.properties) {
          errors.push(...validate(prop, `${field.name}.${prop.name}`));
        }
      }

      return errors;
    };

    const errors = [];
    for (const field of scheme) {
      errors.push(...validate(field));
    }

    if (errors.length > 0) {
      throw new ValidateException(`request is incorrect`, errors);
    } else {
      return next();
    }
  };
};


module.exports = {
  validator
};
