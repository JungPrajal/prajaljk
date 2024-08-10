type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Prajal JK —  Portfolio",
    fullName: "Prajal JK",
    email: "prajaljk7@mail.com",
  },
  hero: {
    name: "Prajal JK",
    p: ["I develop mobile apps", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: "I'm a versatile software developer with expertise in Flutter, Dart, and PHP, and a deep mastery of the Laravel framework. I also specialize in designing intuitive UI/UX experiences using Figma. I quickly adapt to new technologies and thrive on collaborating with clients to create efficient, scalable, and user-friendly solutions that solve real-world challenges. Let's work together to bring your vision to life!",
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
