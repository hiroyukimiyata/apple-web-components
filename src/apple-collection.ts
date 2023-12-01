/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {Task} from '@lit/task';

import './apple-card.js';
import './apple-grid.js';

/**
 * An example element.
 * @customElement apple-collection
 */
@customElement('apple-collection')
export class AppleCollection extends LitElement {
  static override styles = css`
  `;

  private _task = new Task(this, {
    task: async ([], {signal}) => {
      const response = await fetch(`https://main--hackathon-2023--hiroyukimiyata.hlx.page/content-modules.json`, {signal});
      if (!response.ok) { throw new Error(String(response.status)); }

      return this._convert(await response.json());
    },
    args: () => []
  });

  private _shuffleArray = (array) => {
    const cloneArray = [...array]

    for (let i = cloneArray.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1))
      // 配列の要素の順番を入れ替える
      let tmpStorage = cloneArray[i]
      cloneArray[i] = cloneArray[rand]
      cloneArray[rand] = tmpStorage
    }

    return cloneArray
  }

  private _convert(json) {
    const isIncludes = (arr, target) => arr.some(el => target.includes(el)); //OR
    const isAllIncludes = (arr, target) => arr.every(el => target.includes(el)); //AND
    const filtered = json.data.filter((module: any) => {
      const tags = JSON.parse(`"${module.tags}"`);
      const tagArray = this.tags.split(' ');
      if (this.condition.toUpperCase() == 'AND') {
        return isAllIncludes(tagArray, tags);
      } else {
        return isIncludes(tagArray, tags);
      }
    });
    return this._applyAlgorithm(filtered);
  }

  private _applyAlgorithm(array) {
    const algorithm = this.algorithm.toUpperCase();
    if (algorithm == 'NORMAL') {
      return array;
    } else if (algorithm == 'RANDOM') {
      console.log("RRRRR");
      return this._shuffleArray(array);
    }
  }

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  fullwidthrows = 0;

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  cols = 2;

  /**
   * The number of times the button has been clicked.
   */
  @property()
  tags = '';

  /**
   * The number of times the button has been clicked.
   */
  @property()
  condition = 'and';

  /**
   * normal | random | recommended-for-you
   */
  @property()
  algorithm = 'normal';

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  private getCard(module: any, large: boolean) {
      return html`
        <apple-card
          headline="${module.headline}"
          subhead="${module.subhead}"
          color="${module.color}"
          image="${module.image}"
          weight="${large ? 'large' : 'normal'}"
          url=${module.url}
          ctatext=${module.ctatext}
          subctatext="${module.subctatext}"
          subctaurl="${module.subctaurl}"
        >
        </apple-card>
      `;
  }

  override render() {
    return this._task.render({
      pending: () => html`<p>Loading product...</p>`,
      complete: (modules) =>
        html`
        <apple-grid cols="1">
          ${modules.map((module) =>
            this.getCard(module, true)
          ).slice(0, this.fullwidthrows)}
        </apple-grid>
        <apple-grid cols="${this.cols}">
          ${modules.map((module) =>
            this.getCard(module, false)
          ).slice(this.fullwidthrows, modules.length - ((modules.length - this.fullwidthrows) % this.cols))}
        </apple-grid>
        `,
      error: (e) => html`<p>Error: ${e}</p>`
    });


    return ;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'apple-collection': AppleCollection;
  }
}
