import {BlogPostPreview, FilterOnTag, Page} from "@/lib/types";

export const getAllTagsToFilterOn = async (): Promise<FilterOnTag[]> => ([
    {
        name: "My Tag 1",
        icon: "/icon.svg",
        accentColor: "#d1fae5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
        filter: false,
    },
    {
        name: "My Tag 2",
        icon: "/icon.svg",
        accentColor: "#dbeafe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
        filter: false,
    },
    {
        name: "My Tag 3",
        icon: "/icon.svg",
        accentColor: "#fce7f3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
        filter: false,
    },
    {
        name: "My Tag 4",
        icon: "/icon.svg",
        accentColor: "#fef9c3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
        filter: false,
    },
]);

export const getBlogPosts = async (): Promise<Page<BlogPostPreview>> => ({
    data: [
        {
            title: "10 Tips for Effective Time Management",
            publishedOn: "2024-05-09T22:10:00.000Z",
            formattedPublishedOn: "9 mei 2024",
            modifiedOn: null,
            formattedModifiedOn: null,
            tags: [
                {
                    name: "My Tag 1",
                    icon: "/icon.svg",
                    accentColor: "#d1fae5",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
                },
                {
                    name: "My Tag 3",
                    icon: "/icon.svg",
                    accentColor: "#fce7f3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
                }
            ],
            cover: "/placeholder.svg",
            slug: "tips-for-effective-time-management",
            author: {name: "Alice Johnson", avatar: "/profile.svg"}
        },
        {
            title: "The Power of Positive Thinking",
            publishedOn: "2024-05-09T22:10:00.000Z",
            formattedPublishedOn: "9 mei 2024",
            modifiedOn: null,
            formattedModifiedOn: null,
            tags: [
                {
                    name: "My Tag 2",
                    icon: "/icon.svg",
                    accentColor: "#dbeafe",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
                },
                {
                    name: "My Tag 4",
                    icon: "/icon.svg",
                    accentColor: "#fef9c3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
                }
            ],
            cover: "/placeholder.svg",
            slug: "the-power-of-positive-thinking",
            author: {name: "Bob Smith", avatar: "/profile.svg"}
        },
        {
            title: "Mastering the Art of Public Speaking",
            publishedOn: "2024-05-09T22:10:00.000Z",
            formattedPublishedOn: "9 mei 2024",
            modifiedOn: null,
            formattedModifiedOn: null,
            tags: [
                {
                    name: "My Tag 1",
                    icon: "/icon.svg",
                    accentColor: "#d1fae5",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
                },
                {
                    name: "My Tag 3",
                    icon: "/icon.svg",
                    accentColor: "#fce7f3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
                }
            ],
            cover: "/placeholder.svg",
            slug: "mastering-public-speaking",
            author: {name: "Eva Brown", avatar: "/profile.svg"}
        },
        {
            title: "Unlocking Creativity: Finding Your Muse",
            publishedOn: "2024-05-09T22:10:00.000Z",
            formattedPublishedOn: "9 mei 2024",
            modifiedOn: null,
            formattedModifiedOn: null,
            tags: [
                {
                    name: "My Tag 2",
                    icon: "/icon.svg",
                    accentColor: "#dbeafe",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
                },
                {
                    name: "My Tag 4",
                    icon: "/icon.svg",
                    accentColor: "#fef9c3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
                }
            ],
            cover: "/placeholder.svg",
            slug: "unlocking-creativity",
            author: {name: "Grace Miller", avatar: "/profile.svg"}
        },
        {
            title: "The Science Behind Healthy Eating",
            publishedOn: "2024-05-09T22:10:00.000Z",
            formattedPublishedOn: "9 mei 2024",
            modifiedOn: null,
            formattedModifiedOn: null,
            tags: [
                {
                    name: "My Tag 1",
                    icon: "/icon.svg",
                    accentColor: "#d1fae5",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
                },
                {
                    name: "My Tag 3",
                    icon: "/icon.svg",
                    accentColor: "#fce7f3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
                }
            ],
            cover: "/placeholder.svg",
            slug: "science-behind-healthy-eating",
            author: {name: "Henry Wilson", avatar: "/profile.svg"}
        },
        {
            title: "The Importance of Regular Exercise",
            publishedOn: "2024-05-09T22:10:00.000Z",
            formattedPublishedOn: "9 mei 2024",
            modifiedOn: null,
            formattedModifiedOn: null,
            tags: [
                {
                    name: "My Tag 2",
                    icon: "/icon.svg",
                    accentColor: "#dbeafe",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
                },
                {
                    name: "My Tag 4",
                    icon: "/icon.svg",
                    accentColor: "#fef9c3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae rhoncus massa.",
                }
            ],
            cover: "/placeholder.svg",
            slug: "importance-of-regular-exercise",
            author: {name: "Isabel Garcia", avatar: "/profile.svg"}
        }
    ],
    meta: {
        pagination: {
            page: 0,
            pageSize: 4,
            pageCount: 2,
            total: 6,
        }
    },
});
