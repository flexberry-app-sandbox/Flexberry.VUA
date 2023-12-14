import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'ООП модуля КЭДО',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'ООП модуля КЭДО',
          title: 'VUA'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
