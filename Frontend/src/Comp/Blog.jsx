import React from "react";

const blogData = [
    {
        id: 1,
        title: "Healthy Living Tips",
        content: "Discover essential tips for a healthier lifestyle in your daily routine. From balanced nutrition and regular exercise to mindfulness practices, learn how small changes can improve your well-being and prevent chronic diseases.",
        image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
        id: 2,
        title: "Mental Health Awareness",
        content: "Learn how to take care of your mental health and reduce stress. Explore coping strategies, meditation techniques, and professional support options to maintain mental well-being.",
        image: "https://images.pexels.com/photos/4056532/pexels-photo-4056532.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
        id: 3,
        title: "Child Care and Nutrition",
        content: "Essential guidelines for child nutrition and care. Understand age-appropriate diets, vaccination schedules, and tips to ensure healthy growth and development for children.",
        image: "https://images.pexels.com/photos/3662622/pexels-photo-3662622.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
        id: 4,
        title: "Heart Health Awareness",
        content: "Tips to maintain a healthy heart and prevent cardiovascular issues. Learn about heart-healthy diets, exercises, and warning signs to watch for, ensuring long-term cardiovascular wellness.",
        image: "https://images.pexels.com/photos/3952231/pexels-photo-3952231.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
        id: 5,
        title: "Diabetes Management",
        content: "Understand diabetes management and lifestyle modifications. Track blood sugar levels, adopt a balanced diet, and implement exercise routines to effectively manage diabetes.",
        image: "https://images.pexels.com/photos/5938353/pexels-photo-5938353.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
        id: 6,
        title: "Preventing Common Infections",
        content: "Learn about measures to prevent common infections in daily life. Proper hygiene, vaccination, and timely medical consultation are crucial for avoiding preventable illnesses.",
        image: "https://images.pexels.com/photos/4167549/pexels-photo-4167549.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
        id: 7,
        title: "Sleep and Relaxation",
        content: "Good sleep and relaxation techniques are key to maintaining overall health. Learn about creating a healthy sleep routine, managing stress, and improving productivity.",
        image: "https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
        id: 8,
        title: "Women’s Health Essentials",
        content: "Explore important aspects of women's health, including routine check-ups, nutrition, and wellness tips to ensure a balanced and healthy lifestyle.",
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
];

export default function Blog() {
    return (
        <div className="blogs-container">
            <h1 className="blogs-heading">Our Health Blogs</h1>
            <div className="blogs-grid">
                {blogData.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <img src={blog.image} alt={blog.title} className="blog-image" />
                        <h2 className="blog-title">{blog.title}</h2>
                        <p className="blog-content">{blog.content}</p>
                    </div>
                ))}
            </div>
            <button className="readmore-btn">Read More</button>

            <style>{`
        .blogs-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
          text-align: center;
          font-family: 'Poppins', sans-serif;
        }
        .blogs-heading {
          font-size: 2.8rem;
          margin-bottom: 40px;
          color: #0d6efd;
          font-weight: 700;
        }
        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }
        .blog-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
        }
        .blog-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 15px;
        }
        .blog-title {
          font-size: 1.5rem;
          color: #333333;
          margin-bottom: 10px;
        }
        .blog-content {
          font-size: 1rem;
          color: #555555;
          line-height: 1.6;
        }
        .readmore-btn {
          background-color: #0d6efd;
          color: #ffffff;
          border: none;
          padding: 12px 30px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }
        .readmore-btn:hover {
          background-color: #0b5ed7;
        }
        @media (max-width: 768px) {
          .blogs-heading {
            font-size: 2.2rem;
          }
          .blog-card {
            padding: 15px;
          }
          .blog-image {
            height: 150px;
          }
        }
      `}</style>
        </div>
    );
}