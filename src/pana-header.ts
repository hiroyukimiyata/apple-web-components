/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 * @customElement pana-link
 */
@customElement('pana-header')
export class PanaHeader extends LitElement {
  static override styles = css`
    :host {
      //background-color: lightpink;
      margin: 0;
      padding: 0;
      width: 100%;
    }
    header {
      margin: 0;
      padding: 0;
      width: 100%;
      background-color: lightpink;
    }
    .head {
      margin: 0;
      padding-top: 24px;
      height: 28px;
      //width: 80pc;
      display: grid;
      place-content: center;
      place-items: center;
      //grid-template: repeat(2, auto);
      grid-template-columns: 1fr 1fr 1fr;
      background-color: lightgoldenrodyellow;
    }
    .logo {
      margin: 120px 150px 150px;
      padding: 130px 150px 120px;
      height: 28px;
      background-color: lightgray;
      grid-column: 2 / 3;
    }
    .search {
      margin: 0;
      padding: 0;
      background-color: lightcoral;
      grid-column: 3 / 4;
    }
    .navi {
      background-color: lightblue;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    ul {
      grid-column: 2 / 3;
      display: flex;
      justify-content: space-between;
      flex-flow: row;
      list-style-type: none;
      background-color: lightskyblue;
      vertical-align: center;
    }
    li {
      text-align: center;
      width: 160px;
    }
  `;

@property()
text = '';

@property()
href = '#';

override render() {
  return html`
      <header>
          <div class="head">
            <div class="logo">
              <img src="https://panasonic.jp/etc.clientlibs/panasonic-aem-frontend/clientlibs/clientlib-site/resources/images/logo.svg" />
            </div>
            <div class="search">
              <img src="https://panasonic.jp/etc.clientlibs/panasonic-aem-frontend/clientlibs/clientlib-site/resources/images/icons/icon_search.svg" />
            </div>
          </div>
          <div class="navi">
            <ul>
              <li>商品情報</li>
              <li>サポート</li>
              <li>Panasonic Store Plus</li>
              <li>CLUB Panasonic</li>
            </ul>
          </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pana-header': PanaHeader;
  }
}
