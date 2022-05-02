<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="register-form">
        <div class="logo-wrapper">
          <img class="logo" src="/static/images/logo.png">
          <div class="tagline">HealthCare management 가입하기</div>
        </div>
        <form @submit.prevent="submitForm">
          <div v-show="errorMessage" class="alert alert-danger failed">{{ errorMessage }}</div>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" v-model="form.username">
          </div>
          <div class="form-group">
            <label for="emailAddress">Email address</label>
            <input type="email" class="form-control" id="emailAddress" v-model="form.emailAddress">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="form.password">
          </div>
          <b-button class="btn btn-success" type="submit">가입하기</b-button>
          <p class="accept-terms text-muted">"가입하기"를 누르면 <a href="#">terms of service</a> 과<br/> <a href="#">개인정보 보호정책</a>을 동의하게 됩니다.</p>
          <p class="text-center text-muted">이미 회원이세요? <a href="/login">로그인</a></p>
        </form>
      </div>
    </div>
    <footer class="footer">
      <span class="copyright">&copy; 2022 안재영 lux-veritas@naver.com</span>
      <ul class="footer-links list-inline float-right">
        <li class="list-inline-item"><a href="#">About</a></li>
        <li class="list-inline-item"><a href="https://github.com/taskagile/vuejs.spring-boot.mysql" target="_blank">GitHub</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
import registrationService from '@/services/registration'

export default {
  name: 'RegisterPage',
  data: function () {
    return {
      form: {
        username: '',
        emailAddress: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    submitForm () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      registrationService.register(this.form).then(() => {
        this.$router.push({ name: 'LoginPage' })
      }).catch((error) => {
        this.errorMessage = 'Failed to register user. ' + error.message
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.btn btn-success{
  margin-top: 10px;
}
.container {
  max-width: 900px;
}

.register-form {
  margin-top: 50px;
  max-width: 320px;
}

.logo-wrapper {
  text-align: center;
  margin-bottom: 40px;

  .tagline {
    line-height: 180%;
    color: #666;
  }

 .logo {
    max-width: 150px;
    margin: 0 auto;
  }
}

.register-form {

  .form-group label {
    font-weight: bold;
    color: #555;
  }

  .accept-terms {
    margin: 20px 0 40px 0;
  }
}

.footer {
  width: 100%;
  font-size: 13px;
  color: #666;
  line-height: 40px;
  border-top: 1px solid #ddd;
  margin-top: 50px;

  .list-inline-item {
    margin-right: 10px;
  }

  a {
    color: #666;
  }
}

</style>
