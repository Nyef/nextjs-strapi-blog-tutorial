import {AboutUs, BlogPost, BlogPostPreview, FilterOnTag, Page} from "@/lib/types";

export const getAboutUs = async (): Promise<AboutUs> => ({
    title: "Over ons",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt eget odio at vehicula.\n" +
        "Maecenas a mauris vitae leo viverra fermentum. Nunc non ullamcorper augue. Integer felis quam, pulvinar\n" +
        "eget ipsum vel, iaculis dictum nulla. In volutpat accumsan urna non auctor. In sit amet egestas mauris.\n" +
        "Donec sem odio, imperdiet at dui at, euismod tristique ex.",
    seoMetadata: {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt eget odio at " +
            "vehicula. Maecenas a mauris vitae leo viverra fermentum.",
    },
});

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

export const getBlogPost = async (slug: string): Promise<BlogPost> => {
    // Zorg ervoor dat je de API-call cached, [slug]/page.tsx, roep deze
    // functie namelijk twee keer. Caching staat standaard aan voor fetch().

    return {
        title: "Lorem Ipsum Blog Post",
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
        author: {
            name: "Alice Johnson",
            avatar: "/profile.svg",
            biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.",
        },
        content: "" +
            "**Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.**\n" +
            "\n" +
            "## Section 1\n" +
            "\n" +
            "Lorem _ipsum dolor sit_ amet, consectetur [adipiscing](#) elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "### Subsection 1.1\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "#### Subsubsection 1.1.1\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "##### Subsubsubsection 1.1.1.1\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "###### Subsubsubsubsection 1.1.1.1.1\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "## Section 2\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "### Subsection 2.1\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "- Item 1\n" +
            "- Item 2\n" +
            "- Item 3\n" +
            "\n" +
            "#### Subsubsection 2.1.1\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "1. Item 1\n" +
            "2. Item 2\n" +
            "3. Item 3\n" +
            "\n" +
            "##### Subsubsubsection 2.1.1.1\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "###### Subsubsubsubsection 2.1.1.1.1\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "## Section 3\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "### Subsection 3.1\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "#### Subsubsection 3.1.1\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "##### Subsubsubsection 3.1.1.1\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "###### Subsubsubsubsection 3.1.1.1.1\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n" +
            "## Conclusion\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.\n" +
            "\n",
        // TODO- images
        // "<img src=\"https://nyef.nl/blog/eerste-duik-in-python-van-javascript-developer/cover-600x.png\" alt=\"descriptive text\" style=\"max-width: 100%; height: auto;\" />",
        seoMetadata: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nisi. Mauris in lacus auctor, venenatis erat ac, congue magna.",
        },
    };
};

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
