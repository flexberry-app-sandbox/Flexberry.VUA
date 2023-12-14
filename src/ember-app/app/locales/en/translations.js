import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISVUAДолжностиLForm from './forms/i-i-s-v-u-a-должности-l';
import IISVUAРасчетныйЛистLForm from './forms/i-i-s-v-u-a-расчетный-лист-l';
import IISVUAСотрудникиКуLForm from './forms/i-i-s-v-u-a-сотрудники-ку-l';
import IISVUAДолжностиEForm from './forms/i-i-s-v-u-a-должности-e';
import IISVUAРасчетныйЛистEForm from './forms/i-i-s-v-u-a-расчетный-лист-e';
import IISVUAСотрудникиКуEForm from './forms/i-i-s-v-u-a-сотрудники-ку-e';
import IISVUAДолжностиModel from './models/i-i-s-v-u-a-должности';
import IISVUAРасчетныйЛистModel from './models/i-i-s-v-u-a-расчетный-лист';
import IISVUAСоставРасчетаModel from './models/i-i-s-v-u-a-состав-расчета';
import IISVUAСотрудникиКуModel from './models/i-i-s-v-u-a-сотрудники-ку';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-v-u-a-должности': IISVUAДолжностиModel,
    'i-i-s-v-u-a-расчетный-лист': IISVUAРасчетныйЛистModel,
    'i-i-s-v-u-a-состав-расчета': IISVUAСоставРасчетаModel,
    'i-i-s-v-u-a-сотрудники-ку': IISVUAСотрудникиКуModel
  },

  'application-name': 'ООП модуля КЭДО',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'ООП модуля КЭДО',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'ООП модуля КЭДО',
          title: 'ООП модуля КЭДО'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'v-u-a': {
          caption: 'VUA',
          title: 'VUA',
          'i-i-s-v-u-a-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-v-u-a-расчетный-лист-l': {
            caption: 'Расчетный лист',
            title: ''
          },
          'i-i-s-v-u-a-сотрудники-ку-l': {
            caption: 'Сотрудники ку',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-v-u-a-должности-l': IISVUAДолжностиLForm,
    'i-i-s-v-u-a-расчетный-лист-l': IISVUAРасчетныйЛистLForm,
    'i-i-s-v-u-a-сотрудники-ку-l': IISVUAСотрудникиКуLForm,
    'i-i-s-v-u-a-должности-e': IISVUAДолжностиEForm,
    'i-i-s-v-u-a-расчетный-лист-e': IISVUAРасчетныйЛистEForm,
    'i-i-s-v-u-a-сотрудники-ку-e': IISVUAСотрудникиКуEForm
  },

});

export default translations;
