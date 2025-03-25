import React from "react";

const blogPosts = [
  {
    title: "Morning Mindfulness (5 Minutes Is Enough)",
    image: "https://via.placeholder.com/800x400",
    alt: "Person meditating in the morning",
    content:
      "Start your day with just 5 minutes of focused breathing. Sit quietly, inhale through your nose for 4 seconds, hold for 4 seconds, and exhale for 4 seconds. This basic practice calms the nervous system and sets the tone for a peaceful day."
  },
  {
    title: "Digital Detox in the Evening",
    image: "https://via.placeholder.com/800x400",
    alt: "Person reading a book instead of using a phone",
    content:
      "Excess screen time before bed messes with your sleep and mental clarity. Try logging off from all devices at least an hour before bed. Instead, read a book, take a bath, or journal."
  },
  {
    title: "Move Your Body Daily",
    image: "https://via.placeholder.com/800x400",
    alt: "Person jogging in a park",
    content:
      "You don’t need a gym membership. A 20-minute walk, a short yoga session, or even dancing in your room releases endorphins that boost mood and reduce anxiety."
  },
  {
    title: "Stay Connected With Real People",
    image: "https://via.placeholder.com/800x400",
    alt: "Group of friends talking and laughing",
    content:
      "Make it a habit to call or meet one friend or family member each week. Even short, meaningful conversations can significantly improve your emotional health."
  },
  {
    title: "Practice Gratitude",
    image: "https://via.placeholder.com/800x400",
    alt: "Person writing in a gratitude journal",
    content:
      "Every night, write down 3 things you're thankful for. Gratitude journaling is scientifically proven to increase happiness and reduce stress."
  }
];

const BlogPage = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <header className="bg-blue-700 text-white text-center py-4 text-2xl font-bold rounded-md">
        5 Simple Habits to Improve Your Mental Wellness in 2025
      </header>
      <div className="max-w-4xl mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg">
        {blogPosts.map((post, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <h2 className="text-xl font-semibold text-blue-700">{post.title}</h2>
            <img src={post.image} alt={post.alt} className="w-full rounded-md my-2" />
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
      <footer className="text-center text-white bg-blue-700 py-2 mt-6 rounded-md">
        &copy; 2025 Mental Wellness Blog. All Rights Reserved.
      </footer>
    </div>
  );
};

export default BlogPage;
