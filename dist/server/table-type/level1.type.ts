import async from 'async';
import assert from 'assert';
import EventEmitter from 'events';
import clone from 'clone';
import alltable from '../tables.js';
import once from 'once';

let msgDispatcher:EventEmitter=new EventEmitter();
