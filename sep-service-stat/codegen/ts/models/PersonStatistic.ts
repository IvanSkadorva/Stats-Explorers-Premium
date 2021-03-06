/* tslint:disable */
/* eslint-disable */
/**
 * FP Order service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PersonStatistic
 */
export interface PersonStatistic {
    /**
     * 
     * @type {string}
     * @memberof PersonStatistic
     */
    goals: string;
    /**
     * 
     * @type {string}
     * @memberof PersonStatistic
     */
    geo?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonStatistic
     */
    team?: string;
    /**
     * Tea types that are available to order
     * @type {Array<string>}
     * @memberof PersonStatistic
     */
    personMoney?: Array<string>;
}

export function PersonStatisticFromJSON(json: any): PersonStatistic {
    return PersonStatisticFromJSONTyped(json, false);
}

export function PersonStatisticFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonStatistic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'goals': json['goals'],
        'geo': !exists(json, 'geo') ? undefined : json['geo'],
        'team': !exists(json, 'team') ? undefined : json['team'],
        'personMoney': !exists(json, 'personMoney') ? undefined : json['personMoney'],
    };
}

export function PersonStatisticToJSON(value?: PersonStatistic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'goals': value.goals,
        'geo': value.geo,
        'team': value.team,
        'personMoney': value.personMoney,
    };
}


