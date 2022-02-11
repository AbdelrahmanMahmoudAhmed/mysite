<template>
  <Title>
    <template #span>get in </template>
    <template #h1> touch</template>
    <template #hidden>contact </template>
  </Title>
  <div class="contact container">
    <div class="content-details">
      <h3>don't be shy !</h3>
      <p>
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>
      <ul class="contact-ul">
        <li class="contact-li">
          <q-icon name="drafts" />
          <div class="details">
            <span>mail me</span>
            <p>abdelrahman.mahmoud.ahmed@gmail.com</p>
          </div>
        </li>
        <li class="contact-li">
          <q-icon name="drafts" />
          <div class="details">
            <span>call me</span>
            <p>01099757763 / 01212136928</p>
          </div>
        </li>
        <ul class="social">
          <li class="social-item">
            <a
              href="https://www.linkedin.com/in/abd-el-rahman-mahmoud-9b5370a6/"
              target="_blank"
            >
              <font-awesome-icon
                class="pagination-icon"
                :icon="['fab', 'linkedin-in']"
              />
            </a>
          </li>
          <li class="social-item">
            <a
              href="https://github.com/AbdelrahmanMahmoudAhmed"
              target="_blank"
            >
              <font-awesome-icon
                class="pagination-icon"
                :icon="['fab', 'github']"
              />
            </a>
          </li>
          <li class="social-item">
            <a
              href="https://www.facebook.com/abdelrahman.mahmoud.14019338"
              target="_blank"
            >
              <font-awesome-icon
                class="pagination-icon"
                :icon="['fab', 'facebook-f']"
              />
            </a>
          </li>
        </ul>
      </ul>
    </div>
    <div class="form-sec">
      <form action="" class="contact-form">
        <div class="uniq">
          <input type="text" placeholder="your name" />
          <input type="text" placeholder="your email" />
        </div>

        <input type="text" placeholder="your subject" />
        <textarea placeholder="your message"></textarea>
      </form>
      <Button>
        <template #content>
          <router-link to="/about" exact active-class="active">
            send message
          </router-link>
        </template>
        <template #icon> <q-icon name="send" /> </template>
      </Button>
    </div>
  </div>
</template>

<script>
import Title from "src/components/Title.vue";
import Button from "src/components/Button.vue";

export default {
  components: {
    Title,
    Button,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.contact {
  display: flex;
  gap: 40px;

  .content-details {
    width: 33%;
    h3 {
      font-size: 26px;
      font-weight: 600;
      text-transform: uppercase;
      padding-bottom: 1rem;
    }
    p {
      margin-bottom: 1.5rem;
      font-size: 15px;
      font-weight: 500;
      line-height: 1.6;
    }
    .contact-ul {
      .contact-li {
        display: flex;
        gap: 12px;
        i {
          color: $mainColor;
          font-size: 35px;
          margin-top: 5px;
        }
        .details {
          span {
            text-transform: uppercase;
            opacity: 0.8;
            font-weight: 400;
          }
          p {
            font-weight: 600;
            line-height: 25px;
            padding-top: 5px;
            margin-bottom: 20px;
          }
        }
      }
    }
    .social {
      display: flex;
      margin-top: 20px;

      .social-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        color: #fff;
        transition: 0.3s;
        font-size: 17px;
        margin: 0 6px;
        background: #2b2a2a;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
          background-color: $mainColor;
        }
      }
    }
  }
  .form-sec {
    width: 100%;
    .contact-form {
      input,
      textarea {
        border: 1px solid #111;
        width: 100%;
        background: #252525;
        color: #fff;
        padding: 11px 26px;
        border-radius: 30px;
        outline: none;
        margin-bottom: 30px;
        transition: 0.3s;
        &:focus {
          border-color: $mainColor;
        }
        &::placeholder {
          text-transform: uppercase;
        }
      }

      .uniq {
        display: flex;
        gap: 20px;
      }
      textarea {
        resize: vertical;
        height: 200px;
      }
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    .content-details {
      width: 100%;
    }
  }
}
</style>
