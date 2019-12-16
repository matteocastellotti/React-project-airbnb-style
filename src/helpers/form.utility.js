export function validateForm(form, viewLog) {
    if (viewLog === undefined) viewLog = true;
    var errors = {};
    if (form === undefined || form === null || form.formProperties === undefined || form.formProperties === null) return errors;
    for (var i = 0; i < form.formProperties.length; i++) {
        var prop = form.formProperties[i];
        if (prop.required && (prop.value === undefined || prop.value === null || (prop.value + '').trim() === '')) {
            errors[prop.id] = "Campo obbligatorio";
            if (prop.type === 'boolean') {
                errors[prop.id] = "Selezionare Si o No";
            }
            prop.value = undefined;
        }
        if (prop.dependRequired !== undefined && prop.dependRequired !== null) {
            if (prop.dependRequired instanceof Array) {
                var otherProps = [];
                var index = 0;
                for (var p = 0; p < form.formProperties.length; p++) {
                    for (var x = 0; x < prop.dependRequired.length; x++) {
                        if (form.formProperties[p].id === prop.dependRequired[x]) {
                            otherProps[index] = form.formProperties[p];
                            index = index + 1;
                            break;
                        }
                    }
                }
                if (otherProps.length > 0) {
                    // Il campo è obbligatorio se tutte le dipendenze sono vuote
                    var names = [];
                    for (var d = 0; d < prop.dependRequired.length; d++) {
                        if ((otherProps[d].value === undefined || otherProps[d].value === null || otherProps[d].value === '') && (prop.value === undefined || prop.value === null || prop.value === '')) {
                            if (otherProps[d].name !== undefined && otherProps[d].name !== null && otherProps[d].name !== '') {
                                names.push(otherProps[d].name);
                            } else {
                                if (otherProps[d].alternativeName !== undefined && otherProps[d].alternativeName !== null && otherProps[d].alternativeName !== '') {
                                    names.push(otherProps[d].alternativeName);
                                } else {
                                    errors[prop.id] = 'Campo obbligatorio';
                                }
                            }
                        } else {
                            // Almeno una delle dipendenze o lui stesso è valorizzato
                            names = [];
                            break;
                        }
                    }
                    if (names.length > 0) {
                        errors[prop.id] = 'Obbligatorio se';
                        for (var n = 0; n < names.length; n++) {
                            if (n === 0) {
                                errors[prop.id] = errors[prop.id] + ' ' + names[n];
                            } else {
                                errors[prop.id] = errors[prop.id] + ' o ' + names[n];
                            }
                            if (n === (names.length - 1)) {
                                if (n === 0) {
                                    errors[prop.id] = errors[prop.id] + ' non valorizzato';
                                } else {
                                    errors[prop.id] = errors[prop.id] + ' non valorizzati';
                                }
                            }
                        }
                    }
                }
            } else if (prop.dependRequired instanceof String) {
                var otherProp = null;
                for (var p = 0; p < form.formProperties.length; p++) {
                    if (form.formProperties[p].id === prop.dependRequired) {
                        otherProp = form.formProperties[p];
                        break;
                    }
                }
                if (otherProp !== undefined && otherProp !== null) {
                    if ((otherProp.value === undefined || otherProp.value === null || otherProp.value === '') && (prop.value === undefined || prop.value === null || prop.value === '')) {
                        if (otherProp.name !== undefined && otherProp.name !== null && otherProp.name !== '') {
                            errors[prop.id] = 'Obbligatorio se ' + otherProp.name + ' non valorizzato';
                        }
                        else {
                            if (otherProp.alternativeName !== undefined && otherProp.alternativeName !== null && otherProp.alternativeName !== '') {
                                errors[prop.id] = 'Obbligatorio se ' + otherProp.alternativeName + ' non valorizzato';
                            }
                            else {
                                errors[prop.id] = 'Campo obbligatorio';
                            }
                        }
                    }
                }
            }
            else {

            }
        }
        if (prop.dependRequiredIfValued !== undefined && prop.dependRequiredIfValued !== null) {
            if (prop.dependRequiredIfValued instanceof Array) {
                var otherProps = [];
                var index = 0;
                for (var p = 0; p < form.formProperties.length; p++) {
                    for (var d = 0; d < prop.dependRequiredIfValued.length; d++) {
                        if (form.formProperties[p].id === prop.dependRequiredIfValued[d]) {
                            otherProps[index] = form.formProperties[p];
                            index = index + 1;
                            break;
                        }
                    }
                }
                if (otherProps.length > 0) {
                    var names = [];
                    for (var d = 0; d < prop.dependRequiredIfValued.length; d++) {
                        if ((otherProps[d].value !== undefined && otherProps[d].value !== null && otherProps[d].value !== '') && (prop.value === undefined || prop.value === null || prop.value === '')) {
                            if (otherProps[d].name !== undefined && otherProps[d].name !== null && otherProps[d].name !== '') {
                                names.push(otherProps[d].name);
                            }
                            else {
                                if (otherProps[d].alternativeName !== undefined && otherProps[d].alternativeName !== null && otherProps[d].alternativeName !== '') {
                                    names.push(otherProps[d].alternativeName);
                                }
                                else {
                                    errors[prop.id] = 'Campo obbligatorio';
                                }
                            }
                        }
                    }
                    if (names.length > 0) {
                        errors[prop.id] = 'Obbligatorio se';
                        for (var n = 0; n < names.length; n++) {
                            if (n === 0) {
                                errors[prop.id] = errors[prop.id] + ' ' + names[n];
                            }
                            else {
                                errors[prop.id] = errors[prop.id] + ' o ' + names[n];
                            }
                            if (n === (names.length - 1)) {
                                if (n === 0) {
                                    errors[prop.id] = errors[prop.id] + ' valorizzato';
                                }
                                else {
                                    errors[prop.id] = errors[prop.id] + ' valorizzati';
                                }
                            }
                        }
                    }
                }
            }
            else if (prop.dependRequiredIfValued instanceof String) {
                var otherProp = null;
                for (var p = 0; p < form.formProperties.length; p++) {
                    if (form.formProperties[p].id === prop.dependRequiredIfValued) {
                        otherProp = form.formProperties[p];
                        break;
                    }
                }
                if (otherProp !== undefined && otherProp !== null) {
                    if ((otherProp.value !== undefined && otherProp.value !== null && otherProp.value !== '') && (prop.value === undefined || prop.value === null || prop.value === '')) {
                        if (otherProp.name !== undefined && otherProp.name !== null && otherProp.name !== '') {
                            errors[prop.id] = 'Obbligatorio se ' + otherProp.name + ' valorizzato';
                        }
                        else {
                            if (otherProp.alternativeName !== undefined && otherProp.alternativeName !== null && otherProp.alternativeName !== '') {
                                errors[prop.id] = 'Obbligatorio se ' + otherProp.alternativeName + ' valorizzato';
                            }
                            else {
                                errors[prop.id] = 'Campo obbligatorio';
                            }
                        }
                    }
                }
            }
            else {

            }
        }
        if (prop.requiredIfEquals !== undefined && prop.requiredIfEquals !== null) {
            if (prop.requiredIfEquals instanceof Object) {
                if (prop.value === undefined || prop.value === null || prop.value === '') {
                    var names = [];
                    for (var p = 0; p < form.formProperties.length; p++) {
                        var pe = form.formProperties[p];
                        for (var key in prop.requiredIfEquals) {
                            if (pe.id === key && prop.requiredIfEquals[key] !== undefined && prop.requiredIfEquals[key] !== null && prop.requiredIfEquals[key] !== '' && prop.requiredIfEquals[key] === pe.value) {
                                if (pe.name !== undefined && pe.name !== null && pe.name !== '') {
                                    names.push(pe.name);
                                }
                                else {
                                    if (pe.alternativeName !== undefined && pe.alternativeName !== null && pe.alternativeName !== '') {
                                        names.push(pe.alternativeName);
                                    }
                                    else {
                                        errors[prop.id] = 'Campo obbligatorio';
                                    }
                                }

                            }
                        }
                    }
                    if (names.length > 0) {
                        errors[prop.id] = 'Obbligatorio per il valore indicato in ';
                        for (var n = 0; n < names.length; n++) {
                            if (n === 0) {
                                errors[prop.id] = errors[prop.id] + ' "' + names[n] + '"';
                            }
                            else {
                                errors[prop.id] = errors[prop.id] + ' o "' + names[n] + '"';
                            }
                        }
                    }
                }
            }
        }

        if (prop.equals !== undefined && prop.equals !== null) {
            var otherProp = null;
            for (var p = 0; p < form.formProperties.length; p++) {
                if (form.formProperties[p].id === prop.equals) {
                    otherProp = form.formProperties[p];
                    break;
                }
            }
            if (otherProp !== undefined && otherProp !== null) {
                if (otherProp.value !== prop.value) {
                    errors[prop.id] = 'Il valore di questo campo deve essere uguale a quello di  ' + otherProp.name + '';
                }
            }
        }
        if (prop.pattern !== undefined && prop.pattern !== null) {
            if (prop.value !== undefined && prop.value !== null && prop.value !== '') {
                if (!prop.pattern.test(prop.value)) {
                    errors[prop.id] = "Formato errato";
                    if ((prop.customMessage !== undefined && prop.customMessage !== null)) {
                        errors[prop.id] = prop.customMessage;
                    }
                }
            }
        }
        if (prop.value !== undefined && prop.value !== null) {
            switch (prop.type) {
                case 'string':
                    if (prop.value.length > 4000) {
                        errors[prop.id] = "Valore troppo lungo, massimo 4000 caratteri";
                    }
                    break;
                case 'string':
                    if (prop.value.length > 4000) {
                        errors[prop.id] = "Valore troppo lungo, massimo 4000 caratteri";
                    }
                    break;
                case 'TextArea':
                    if (prop.value.length > 4000) {
                        errors[prop.id] = "Valore troppo lungo, massimo 4000 caratteri";
                    }
                    break;
                case 'Html':
                    if (prop.value.length > 4000) {
                        errors[prop.id] = "Valore troppo lungo, massimo 4000 caratteri";
                    }
                    break;
                case 'long':
                    //if (!angular.isNumber(prop.value) && isNaN(prop.value)) {
                    //   errors[prop.id] = "Richiesto un numero";
                    //}
                    break;
                case 'float':
                    //if (!angular.isNumber(prop.value) && isNaN(prop.value)) {
                    //    errors[prop.id] = "Richiesto un numero intero o decimale (usare \".\" come separatore)";
                    //}
                    break;
                case 'double':
                    //if (!angular.isNumber(prop.value) && isNaN(prop.value)) {
                    //    errors[prop.id] = "Richiesto un numero intero o decimale (usare \".\" come separatore)";
                    //}
                    break;
                case 'Integer':
                    //if (!angular.isNumber(prop.value) && parseInt(prop.value, 10) === prop.value) {
                    //    errors[prop.id] = "Richiesto un numero intero";
                    //}
                    break;
                case 'date':
                    //if (!angular.isDate(prop.value)) {
                    //    errors[prop.id] = "Richiesta una data";
                    //    if ((prop.customMessage != undefined && prop.customMessage != null)) {
                    //        errors[prop.id] = prop.customMessage;
                    //    }
                    //}
                    break;
                case 'boolean':
                    if ((prop.value !== true && prop.value !== false && prop.value !== 'true' && prop.value !== 'false')) {
                        errors[prop.id] = "Richiesto un valore booleano";
                        if ((prop.customMessage !== undefined && prop.customMessage !== null)) {
                            errors[prop.id] = prop.customMessage;
                        }
                    }
                    break;
                case 'PatientEnrollmentServiceObject':
                    for (var o = 0; o < prop.value.length; o++) {
                        var p = prop.value[o];
                        if (p.firstName === undefined || p.firstName === null || p.firstName === '') {
                            errors[prop.id + '_' + o + '_firstName'] = 'Campo obbligatorio';
                        }
                        if (p.lastName === undefined || p.lastName === null || p.lastName === '') {
                            errors[prop.id + '_' + o + '_lastName'] = 'Campo obbligatorio';
                        }
                        if (p.delegateContactType !== 'PATIENT') {
                            if (p.delegateContactFirstName === undefined || p.delegateContactFirstName === null || p.delegateContactFirstName === '') {
                                errors[prop.id + '_' + o + '_delegateContactFirstName'] = 'Campo obbligatorio';
                            }
                            if (p.delegateContactLastName === undefined || p.delegateContactLastName === null || p.delegateContactLastName === '') {
                                errors[prop.id + '_' + o + '_delegateContactLastName'] = 'Campo obbligatorio';
                            }
                        }
                    }
                    break;
                default:
                    if (prop.enumValues !== undefined && prop.enumValues.length > 0) {
                        var found = false;
                        if (prop.value instanceof Array) {
                            for (var k = 0; k < prop.value.length; k++) {
                                if (prop.value[k] !== undefined && prop.value[k] !== null && prop.value[k] !== '') {
                                    for (var j = 0; j < prop.enumValues.length; j++) {
                                        if (prop.enumValues[j].id === prop.value[k]) {
                                            found = true;
                                            break;
                                        }
                                    }
                                    if (!found) {
                                        if (prop.skipCheckListValue === undefined || prop.skipCheckListValue === null || !prop.skipCheckListValue) {
                                            errors[prop.id] = "Valore non previsto";
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            for (var j = 0; j < prop.enumValues.length; j++) {
                                if (prop.enumValues[j].id === prop.value) {
                                    found = true;
                                    break;
                                }
                            }
                            if (!found) {
                                if (prop.skipCheckListValue === undefined || prop.skipCheckListValue === null || !prop.skipCheckListValue) {
                                    errors[prop.id] = "Valore non previsto";
                                }
                            }
                        }
                    }
                    if (prop.type !== 'Layout' && prop.writable && prop.value.length > 255) {
                        errors[prop.id] = "Valore troppo lungo, massimo 255 caratteri";
                    }
                    break;
            }
        }
        if (prop.type !== undefined && errors[prop.id] === undefined && (prop.type.indexOf('Pdf') >= 0 && prop.type.indexOf('List') < 0)) {
            if (prop.lastModified === undefined) {
                prop.lastModified = new Date();
            }
            for (var c = 0; c < form.formProperties.length; c++) {
                if (form.formProperties[c].id.indexOf(prop.id) !== 0 && form.formProperties[c].lastModified !== undefined && prop.lastModified !== undefined && form.formProperties[c].lastModified > prop.lastModified) {
                    errors[prop.id] = "E' necessario generare nuovamente il PDF in quanto sono state fatte alcune modifiche ai dati";
                    break;
                }
            }
        }
    }
    return errors;
}