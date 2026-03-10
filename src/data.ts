export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const CATEGORIES = [
  "All",
  "Design",
  "Technology",
  "Lifestyle",
  "Productivity",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Minimalist Web Design",
    excerpt:
      "Explore how less can be more when it comes to creating engaging user experiences on the web.",
    content: `
Minimalism in web design is not just about removing elements; it's about highlighting what truly matters. By stripping away the non-essential, we allow the core message and functionality to shine through.

### Why Minimalism Works

1. **Clarity:** Users can immediately understand the purpose of the site.
2. **Speed:** Fewer elements mean faster load times.
3. **Focus:** It directs the user's attention to the primary call to action or content.

### Key Principles

- **Whitespace is your friend:** Don't be afraid of empty space. It gives elements room to breathe.
- **Typography matters:** When you have fewer visual elements, the text itself becomes a major design component. Choose fonts carefully.
- **Color with purpose:** Use a limited color palette. Let one or two accent colors do the heavy lifting.

Embracing minimalism can lead to more elegant, effective, and timeless web designs.
    `,
    imageUrl: "https://picsum.photos/seed/minimal/800/500",
    category: "Design",
    author: "Jane Doe",
    date: "Oct 12, 2023",
    readTime: "4 min read",
  },
  {
    id: "2",
    title: "Understanding React Server Components",
    excerpt:
      "A deep dive into the new paradigm of building React applications with Server Components.",
    content: `
React Server Components (RSC) represent a significant shift in how we build React applications. They allow us to render components on the server, sending only the resulting HTML to the client.

### The Problem with Client-Side Rendering

Traditional React apps send a large JavaScript bundle to the client, which then has to execute before the user sees anything meaningful. This can lead to slow initial load times, especially on slower devices or networks.

### How RSC Solves This

Server Components execute entirely on the server. They can access databases, file systems, and other server-side resources directly. The client only receives the final UI, reducing the amount of JavaScript sent over the wire.

### Benefits

- **Smaller Bundle Sizes:** Less JS means faster load times.
- **Direct Backend Access:** No need for intermediate APIs for simple data fetching.
- **Improved SEO:** Search engines can easily crawl the fully rendered HTML.

RSCs are still evolving, but they offer a promising future for building faster, more efficient React applications.
    `,
    imageUrl: "https://picsum.photos/seed/react/800/500",
    category: "Technology",
    author: "John Smith",
    date: "Nov 05, 2023",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "10 Habits for a More Productive Morning",
    excerpt:
      "Start your day right with these simple yet effective habits that will boost your productivity.",
    content: `
How you start your morning sets the tone for the rest of the day. By incorporating a few key habits, you can significantly increase your productivity and overall well-being.

### 1. Wake Up Early

Giving yourself extra time in the morning reduces stress and allows you to start the day on your own terms.

### 2. Hydrate

Drink a large glass of water as soon as you wake up to rehydrate your body after a long night's sleep.

### 3. Move Your Body

Whether it's a full workout, a quick yoga session, or just some stretching, getting your blood flowing is crucial.

### 4. Plan Your Day

Take 5 minutes to review your goals and prioritize your tasks for the day. Identify the most important thing you need to accomplish.

### 5. Avoid Screens

Resist the urge to check your phone or email immediately. Give your brain some time to wake up without digital stimulation.

Implementing even a few of these habits can make a noticeable difference in your daily productivity.
    `,
    imageUrl: "https://picsum.photos/seed/morning/800/500",
    category: "Productivity",
    author: "Emily Chen",
    date: "Dec 20, 2023",
    readTime: "5 min read",
  },
  {
    id: "4",
    title: "The Future of Artificial Intelligence",
    excerpt:
      "Examining the potential impacts of AI on various industries and our daily lives.",
    content: `
Artificial Intelligence is no longer just a concept from science fiction; it's rapidly becoming an integral part of our reality. From self-driving cars to personalized recommendations, AI is transforming how we live and work.

### Impact on Industries

- **Healthcare:** AI is being used to analyze medical images, predict disease outbreaks, and personalize treatment plans.
- **Finance:** Algorithms are detecting fraud, managing investments, and providing customer service through chatbots.
- **Transportation:** Autonomous vehicles promise to make our roads safer and more efficient.

### Ethical Considerations

As AI becomes more powerful, we must also address the ethical implications. Issues such as bias in algorithms, job displacement, and data privacy need careful consideration.

The future of AI is full of possibilities, but it's up to us to ensure it's developed and used responsibly.
    `,
    imageUrl: "https://picsum.photos/seed/ai/800/500",
    category: "Technology",
    author: "David Lee",
    date: "Jan 15, 2024",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Creating a Cozy Workspace at Home",
    excerpt:
      "Tips and tricks for designing a home office that is both comfortable and inspiring.",
    content: `
With more people working from home than ever before, creating a workspace that promotes focus and well-being is essential. A cozy and inspiring environment can significantly improve your workday.

### Lighting is Key

Natural light is best, so try to position your desk near a window. If that's not possible, invest in good quality task lighting to reduce eye strain.

### Ergonomics Matter

A comfortable chair and a desk at the right height are crucial for preventing aches and pains. Don't skimp on ergonomics.

### Personalize Your Space

Add plants, artwork, or personal photos to make the space feel like your own. A touch of nature can be particularly calming.

### Keep it Organized

A cluttered desk leads to a cluttered mind. Invest in storage solutions to keep your workspace tidy and organized.

By paying attention to these details, you can create a home office that you actually enjoy spending time in.
    `,
    imageUrl: "https://picsum.photos/seed/workspace/800/500",
    category: "Lifestyle",
    author: "Sarah Jones",
    date: "Feb 28, 2024",
    readTime: "4 min read",
  },
  {
    id: "6",
    title: "Mastering Tailwind CSS",
    excerpt:
      "A comprehensive guide to building modern, responsive layouts quickly with Tailwind CSS.",
    content: `
Tailwind CSS has revolutionized the way we style web applications. By providing a set of utility classes, it allows developers to build custom designs without ever leaving their HTML.

### The Utility-First Approach

Instead of writing custom CSS for every component, Tailwind provides classes like \`flex\`, \`pt-4\`, \`text-center\`, and \`rotate-90\` that can be composed to build any design.

### Advantages

- **Speed:** You can build layouts incredibly fast once you learn the classes.
- **Consistency:** Using a predefined set of spacing, color, and typography scales ensures a consistent look and feel.
- **Maintainability:** You don't have to worry about naming CSS classes or dealing with specificity issues.

### Getting Started

The best way to learn Tailwind is by doing. Start by building simple components and gradually move on to more complex layouts. The official documentation is an excellent resource.
    `,
    imageUrl: "https://picsum.photos/seed/tailwind/800/500",
    category: "Design",
    author: "Michael Brown",
    date: "Mar 10, 2024",
    readTime: "8 min read",
  },
];
