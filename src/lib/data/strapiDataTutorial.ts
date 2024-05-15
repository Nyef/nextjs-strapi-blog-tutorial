import {Data} from "@/lib/data/data";
import {AboutUs, BlogPost, BlogPostPreview, Page, Tag} from "../types";

/*
 * Useful links:
 * - https://docs.strapi.io/dev-docs/api/rest#endpoints
 * - https://docs.strapi.io/dev-docs/api/rest/populate-select#population
 * - https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder
 *
 * Tips:
 * - Make sure the cache all remote API-calls, some pages may call it multiple
 *   times in a short period of time. By default, `fetch()` get cached.
 */

export class StrapiDataTutorial implements Data {
    async getAboutUs(): Promise<AboutUs> {
        throw new Error("Implement me");
    };

    async getAllTagsToFilterOn(): Promise<Tag[]> {
        throw new Error("Implement me");
    };

    async getBlogPost(slug: string): Promise<BlogPost> {
        // Zorg ervoor dat je de API-call cached, [slug]/page.tsx roept deze
        // functie namelijk twee keer. Caching staat standaard aan voor fetch().
        throw new Error("Implement me");
    };

    async getBlogPosts(page: number, filterOnTags: string[]): Promise<Page<BlogPostPreview>> {
        throw new Error("Implement me");
    };
}
