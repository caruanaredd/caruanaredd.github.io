import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import * as YAML from 'yaml';
import { map } from 'rxjs/operators';
import { Navigatable } from '../struct';

export class InitService
{
    constructor(
        protected http: HttpClient
    ) { }

    async init()
    { }
}

@Injectable({
    providedIn: 'root'
})
export class BaseService<T extends Navigatable> extends InitService
{
    // The folder to access.
    protected folder: string = '';

    // The data.
    protected data: T[] = [];

    /**
     * Initializes the class data.
     */
    async init()
    {
        const files: string[] = await this.http.get(`/assets/data/${this.folder}/directory.yml`, {
            responseType: 'text'
        }).pipe(
            map(text => YAML.parse(text) as string[])
        ).toPromise();

        for (let file of files)
        {
            const entry: T = await this.http.get(`/assets/data/${this.folder}/${file}`, {
                responseType: 'text'
            }).pipe(
                map(text => YAML.parse(text) as T)
            ).toPromise();

            this.data.push(entry);
        }
    }

    /**
     * Returns all the data in this service.
     * @returns All the data in this service.
     */
    public getRaw(): T[]
    { return this.data; }

    /**
     * Returns a post from the specified slug.
     * @param slug The post slug.
     * @returns The specified post.
     */
    public get(slug: string): T | undefined
    {
        const post = this.data.find(item => item.slug == slug);
        return post;
    }
}