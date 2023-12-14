import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.v-u-a.caption'),
          title: i18n.t('forms.application.sitemap.v-u-a.title'),
          children: [{
            link: 'i-i-s-v-u-a-должности-l',
            caption: i18n.t('forms.application.sitemap.v-u-a.i-i-s-v-u-a-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.v-u-a.i-i-s-v-u-a-должности-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-v-u-a-расчетный-лист-l',
            caption: i18n.t('forms.application.sitemap.v-u-a.i-i-s-v-u-a-расчетный-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.v-u-a.i-i-s-v-u-a-расчетный-лист-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-v-u-a-сотрудники-ку-l',
            caption: i18n.t('forms.application.sitemap.v-u-a.i-i-s-v-u-a-сотрудники-ку-l.caption'),
            title: i18n.t('forms.application.sitemap.v-u-a.i-i-s-v-u-a-сотрудники-ку-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})