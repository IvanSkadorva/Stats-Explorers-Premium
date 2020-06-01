/* tslint:disable */
/* eslint-disable */
/**
 * SEP STAT service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PersonBet,
    PersonBetFromJSON,
    PersonBetToJSON,
    PersonStatistic,
    PersonStatisticFromJSON,
    PersonStatisticToJSON,
    PersonVideo,
    PersonVideoFromJSON,
    PersonVideoToJSON,
} from '../models';

export interface ListBetsRequest {
    statisticId?: string;
    startTime?: string;
    endTime?: string;
    page?: number;
}

export interface ListStatisticsRequest {
    person?: string;
}

/**
 * no description
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * List of person videos to Bet
     */
    async listBetsRaw(requestParameters: ListBetsRequest): Promise<runtime.ApiResponse<Array<PersonBet>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.statisticId !== undefined) {
            queryParameters['statisticId'] = requestParameters.statisticId;
        }

        if (requestParameters.startTime !== undefined) {
            queryParameters['startTime'] = requestParameters.startTime;
        }

        if (requestParameters.endTime !== undefined) {
            queryParameters['endTime'] = requestParameters.endTime;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/person/bets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PersonBetFromJSON));
    }

    /**
     * List of person videos to Bet
     */
    async listBets(requestParameters: ListBetsRequest): Promise<Array<PersonBet>> {
        const response = await this.listBetsRaw(requestParameters);
        return await response.value();
    }

    /**
     * List of person cafe and person spot places
     */
    async listStatisticsRaw(requestParameters: ListStatisticsRequest): Promise<runtime.ApiResponse<Array<PersonStatistic>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.person !== undefined) {
            queryParameters['person'] = requestParameters.person;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/person/statistics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PersonStatisticFromJSON));
    }

    
    async listStatistics(requestParameters: ListStatisticsRequest): Promise<Array<PersonStatistic>> {
        const response = await this.listStatisticsRaw(requestParameters);
        return await response.value();
    }

    async listPersonVideosRaw(): Promise<runtime.ApiResponse<Array<PersonVideo>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/person/videos`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PersonVideoFromJSON));
    }

    /**
     * List of person videos to Bet
     */
    async listPersonVideos(): Promise<Array<PersonVideo>> {
        const response = await this.listPersonVideosRaw();
        return await response.value();
    }

}
