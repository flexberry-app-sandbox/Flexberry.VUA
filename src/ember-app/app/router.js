import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-v-u-a-должности-l');
  this.route('i-i-s-v-u-a-должности-e',
  { path: 'i-i-s-v-u-a-должности-e/:id' });
  this.route('i-i-s-v-u-a-должности-e.new',
  { path: 'i-i-s-v-u-a-должности-e/new' });
  this.route('i-i-s-v-u-a-расчетный-лист-l');
  this.route('i-i-s-v-u-a-расчетный-лист-e',
  { path: 'i-i-s-v-u-a-расчетный-лист-e/:id' });
  this.route('i-i-s-v-u-a-расчетный-лист-e.new',
  { path: 'i-i-s-v-u-a-расчетный-лист-e/new' });
  this.route('i-i-s-v-u-a-сотрудники-ку-l');
  this.route('i-i-s-v-u-a-сотрудники-ку-e',
  { path: 'i-i-s-v-u-a-сотрудники-ку-e/:id' });
  this.route('i-i-s-v-u-a-сотрудники-ку-e.new',
  { path: 'i-i-s-v-u-a-сотрудники-ку-e/new' });
});

export default Router;
