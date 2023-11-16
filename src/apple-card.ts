/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import './apple-link.js';

/**
 * An example element.
 * @customElement apple-card
 */
@customElement('apple-card')
export class AppleCard extends LitElement {
  static override styles = css`
    .unit-wrapper {
      display: flex;
      overflow-x: hidden;
      overflow-y: hidden;
      align-content: flex-start;
      flex-direction: column;
      padding: 4px 0px 0px 0px;
      border-width: 0px;
    }
    .unit-copy-wrapper {
      text-align: center;
      margin-top: 44px;
    }
    .unit-image {
      flex-grow: 1;
      overflow-x: visible;
      overflow-y: visible;
      display: block;
      background-size: 1262px 580px;
      height: 580px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top;
    }
    .headline {
      font-style: normal;
      margin: 0px;
      padding: 0px;
      letter-spacing: normal;
    }
    .headline-normal {
      font-size: 38px;
      font-weight: 600;
    }
    .headline-large {
      font-size: 60px;
      font-weight: 460;
    }
    .subhead {
      font-style: normal;
      margin: 0px;
      padding: 0px 0px 4px 0px;
    }
    .subhead-normal {
      font-size: 18px;
      font-weight: 400;
    }
    .subhead-large {
      font-size: 26px;
      font-weight: 440;
    }
    .cta-links apple-link:not(:first-of-type) {
      margin-left: 28px;
    }
    .cta-links-normal {
      font-size: 14px;
      font-weight: 300;
    }
    .cta-links-large {
      font-size: 16px;
      font-weight: 300;
    }
    .color-gray {
      background-color: rgb(251, 251, 253);
    }
    .color-black {
      background-color: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
    }
    .color-white {
      background-color: rgb(255, 255, 255);
      color: rgb(0, 0, 0);
    }
    a,a:visited,a:hover {
      text-decoration: none;
      color: rgb(0, 0, 0);
    }
  `;

@property()
headline = '';

@property()
subhead = '';

@property()
image = '';

@property()
color = 'gray';

@property()
weight: 'normal';

@property()
url: '';

override render() {
  return html`
      <style>
        .background-image {
          background-image: url("${this.image}");
        }
      </style>
      <a href="${this.url}">
        <div class="unit-wrapper unit-image background-image color-${this.color}">
          <div class="unit-copy-wrapper">
            <h4 class="headline headline-${this.weight}">${this.headline}</h4>
            <h5 class="subhead subhead-${this.weight}">${this.subhead}</h5>
            <div class="cta-links cta-link-${this.weight}">
              <apple-link href="${this.url}">さらに詳しく</apple-link>
              <apple-link href="${this.url}">購入する</apple-link>
            </div>
          </div>
          <div class="unit-image-wrapper">
          </div>
        </div>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'apple-card': AppleCard;
  }
}
