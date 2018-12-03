import Vue from 'vue';
import * as custom from './filters'
Object.keys(custom).forEach(key => Vue.filter(key, custom[key]))