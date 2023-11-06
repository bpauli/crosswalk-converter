/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable import/prefer-default-export */

import { pipe } from './utill/pipe.js';
import md2html from './steps/md2html.js';
import fetchContent from './steps/fetch-content.js';
import html2md from './steps/html2md.js';
import parseMd from './steps/parse-md.js';
import transformMdast from './steps/transform-mdast.js';
import stringifyMdast from './steps/stringify-mdast.js';

export function pipeline() {
  return pipe()
    .use(fetchContent)
    .use(html2md)
    .use(parseMd)
    .use(transformMdast)
    .use(stringifyMdast)
    .use(md2html, (_, params) => !params.md);
}