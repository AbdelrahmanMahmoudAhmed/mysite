import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'


// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: {
      data: [
        {
          id: 1,
          img: "blog/five.jpeg",
          title: "blog project",
          language: "react.js",
          git: "https://github.com/AbdelrahmanMahmoudAhmed/social",
          link: "",
          imgs: [
            "blog/blog-one.png",
            "blog/blog-two.png",
            "blog/blog-three.png",
            "blog/blog-four.png",
            "blog/blog-five.png",

          ]
        },
        {
          id: 2,
          img: "commerce/Home.jpg",
          title: "commerce project",
          language: "vue.js",
          git: "https://github.com/AbdelrahmanMahmoudAhmed/mira--",
          link: "https://abdelrahmanmahmoudahmed.github.io/mira--/#/",
          imgs: [
            "commerce/commerce_one.png",
            "commerce/commerce-two.png",
            "commerce/commerce-three.png",
            "commerce/commerce-four.png",

          ]
        },
        {
          id: 3,
          img: "warehouse-app/001_1.png",
          title: "warehouse app",
          language: "jQuery",
          git: "https://github.com/AbdelrahmanMahmoudAhmed/warehouse-project",
          link: "https://abdelrahmanmahmoudahmed.github.io/warehouse-project-demo/#/",
          imgs: [
            // "warehouse-app/001.png",
            "warehouse-app/005.png",

            "warehouse-app/warehouse-three.png",
            "warehouse-app/warehouse-two.png",
            "warehouse-app/warehouse-one.png",
            "warehouse-app/004.png",
          ]
        },

        {
          id: 4,
          img: "collect-four/backGroundPP.jpg",
          title: "collect-four game",
          language: "jQuery",
          git: "https://github.com/AbdelrahmanMahmoudAhmed/connect_four",
          link: "https://abdelrahman-mahmoud-ahmed.000webhostapp.com/collect_four/",
          imgs: [

            "collect-four/connect-one.jpg",
            "collect-four/connect-two.jpg",
            "collect-four/connect-three.jpg",
            "collect-four/connect-four.jpg",

          ]
        },

        {
          id: 5,
          img: "first-p/about.jpg",
          title: "website page",
          language: "HTML , CSS",
          git: "",
          link: "https://abdelrahman-mahmoud-ahmed.000webhostapp.com/first_project/",
          imgs: [


            "first-p/first-one.png",
            "first-p/first-two.png",
            "first-p/first-three.png",
          ]
        },
        {
          id: 6,
          img: "temp-one/zza.jpg",
          title: "website page",
          language: "HTML , CSS",
          git: "",
          link: "https://abdelrahman-mahmoud-ahmed.000webhostapp.com/temb-one/",
          imgs: [
            "temp-one/temp-one.png",
            "temp-one/temp-two.png",
          ]
        },
        {
          id: 7,
          img: "second-p/owl.jpg",
          title: "website page",
          language: "HTML , CSS",
          git: "",
          link: "https://abdelrahman-mahmoud-ahmed.000webhostapp.com/temb-two/",
          imgs: [


            "second-p/owl-one.png",
            "second-p/owl-two.png",
            "second-p/owl-three.png",

          ]
        },


      ],
      oneProject: [],
      education: [
        {
          date: 2020,
          mainTitle: "front-end course",
          secondaryTitle: "udacity",
          content: "course content includes HTML , css , javascript , rest Api and axios  .The evaluation in this course is based on presenting a project that is an application for the weather, how to properly build the project and deal with the API, as well as other tests that include logical thinking to solve problems using JavaScript "
        },
        {
          date: 2020,
          mainTitle: "marketing",
          secondaryTitle: "udacity",
          content: "I learned how to lead a successful campaign using social media platforms as defines a goal , select KPIs , pick the target persona , how to create an attractive content , choose convenient platforms , how to treat with potential and follow up results .Also i learned how to create a successful email campaign , what about legality of this according every country law , how to increase the email list subscribers , how to use A/B Test to get the perfect results and how to make the CTA more attractive and lead to the target of the campaign . "

        },
        {
          date: 2020,
          mainTitle: "javascript frameworks",
          secondaryTitle: "self study",
          content: "JavaScript frameworks make writing code very easy because it is based on reusable components, making the code short, clean, easy to read and easy to modify.Therefore, I have learned (React.js, Vue.js) and mastered dealing with them and created many projects using them."
        },
        {
          date: 2019,
          mainTitle: "basics of pricing course",
          secondaryTitle: "udemy",
          content: "The content of the course revolves around how to study and test market conditions and other factors that help in targeting the correct pricing of goods and services"
        },

      ],
      blogs: [
        {
          id: 1,
          title: "How to Own Your Audience by Creating an Email List",
          img: "blog-post-1.jpg",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          name: "abdelrahman",
          date: "10 febuaray 2022",
          tags: " business, economy, design"
        },
        {
          id: 2,
          title: "How to Own Your Audience by Creating an Email List",
          img: "blog-post-1.jpg",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          name: "abdelrahman",
          date: "10 febuaray 2022",
          tags: " business, economy, design"
        },
        {
          id: 3,
          title: "How to Own Your Audience by Creating an Email List",
          img: "blog-post-1.jpg",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          name: "abdelrahman",
          date: "10 febuaray 2022",
          tags: " business, economy, design"
        }
      ],
      oneBlog: [],
    },
    getters: {

    },
    mutations: {
      filterProject(state, payload) {
        const projectsFilter = state.data.filter((project) => {
          return project.id == payload
        })
        state.oneProject = projectsFilter
      },
      filterBlog(state, payload) {
        const blogssFilter = state.blogs.filter((blog) => {
          return blog.id == payload
        })
        state.oneBlog = blogssFilter
      }
    },
    actions: {

    },
    modules: {
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
