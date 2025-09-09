<template>
    <div class="login-register-container">
        <div class="login-card">
            <!-- 左侧品牌介绍区域 -->
            <div class="brand-section">
                <div class="brand-content">
                    <div class="brand-logo">
                        <img :src="ImagePath.logoUrl" alt="logo" class="wave-icon">
                    </div>
                    <h1 class="brand-title">GZMusic</h1>
                    <p class="brand-subtitle">探索无限音乐世界</p>

                    <div class="features">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg t="1756431784117" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="5444" width="30" height="30">
                                    <path
                                        d="M958.708971 97.671507c0.00921-12.554944-5.593392-24.446785-15.255449-32.392758-9.657964-7.956206-22.350031-11.120268-34.594913-8.610098L384.945279 163.701362c-19.360953 3.955078-33.280987 21.072945-33.296337 40.941458l-0.329505 477.604632c-29.119201-16.737196-63.945381-25.944905-101.395318-25.944905-0.056282 0-0.102331 0-0.157589 0-47.749514 0-92.990904 15.038508-127.398552 43.521213-36.777625 30.447453-57.051367 67.602677-57.07695 111.974257-0.055259 88.38398 82.674954 156.37449 184.41615 156.37449 0.055259 0 0.101307 0 0.157589 0 47.759747 0 90.443895-11.95938 124.856659-40.442084 36.782741-30.443359 54.519708-69.159126 54.519708-113.514333l0 0.61603 0 0.309038 0 0.152473 2.845815-407.194002 442.041672-89.829911 0.473791 247.498884c-29.042453-16.597003-63.071478-23.818475-100.354616-23.818475-0.055259 0-0.11154 0-0.167822 0-47.749514 0-92.990904 13.145391-127.398552 41.624003-36.786835 30.442336-57.0616 68.539003-57.087183 112.914676-0.056282 88.38398 82.679048 157.331281 184.434569 157.331281 0.046049 0 0.081864 0 0.12689 0 97.022731 0 176.962388-63.573921 184.16237-146.287761 0.069585-0.984421 0.25378-5.492084 0.112564-16.951067L958.708971 97.671507zM324.453556 863.391069c-19.568684 16.198937-46.053895 21.61632-74.589812 21.61632-0.030699 0-0.066515 0-0.097214 0-54.95052 0-101.354386-31.69077-101.329826-73.255421 0.010233-18.933211 9.520841-35.062564 26.76969-49.341778 19.563568-16.194844 46.039569-22.942525 74.560136-22.942525 0.029676 0 0.066515 0 0.097214 0 54.970986 0 101.390201 33.026184 101.364619 74.600045C351.213014 832.993758 341.707522 849.111854 324.453556 863.391069zM434.70559 333.51391l0.065492-94.66708 440.756399-90.041736-0.065492 94.842065L434.70559 333.51391zM774.160815 770.655991c-0.024559 0-0.050142 0-0.075725 0-54.960753 0-101.370759-33.585933-101.344153-75.1557 0.00921-18.934235 9.520841-34.117029 26.773783-48.39215 19.563568-16.194844 46.039569-21.991874 74.570369-21.991874 0.034792 0 0.070608 0 0.106424 0 52.344159 0 102.06149 27.308973 102.06149 66.25089l0 11.796674C865.85826 742.070956 826.472228 770.655991 774.160815 770.655991z"
                                        p-id="5445" fill="#2E3033"></path>
                                </svg>
                            </div>
                            <div class="feature-text">
                                <h3>千万曲库</h3>
                                <p>随心所欲地探索音乐世界</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg t="1756432363418" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="6657" width="30" height="30">
                                    <path
                                        d="M983.04 704.512c-22.528 0-40.96-18.432-40.96-40.96 0-219.136-112.64-456.704-430.08-458.752-120.832-2.048-223.232 36.864-299.008 110.592-83.968 81.92-131.072 208.896-131.072 348.16 0 22.528-18.432 40.96-40.96 40.96s-40.96-18.432-40.96-40.96c0-159.744 57.344-309.248 155.648-405.504C245.76 167.936 368.64 120.832 512 122.88c376.832 4.096 512 292.864 512 540.672 0 22.528-18.432 40.96-40.96 40.96z"
                                        fill="#2E3033" p-id="6658"
                                        data-spm-anchor-id="a313x.search_index.0.i15.2ef63a81IG7PtO" class="selected">
                                    </path>
                                    <path
                                        d="M161.792 901.12C71.68 901.12 0 829.44 0 739.328v-73.728c0-88.064 71.68-161.792 161.792-161.792s161.792 71.68 161.792 161.792v73.728c-2.048 90.112-73.728 161.792-161.792 161.792z m0-313.344c-43.008 0-79.872 34.816-79.872 79.872v73.728C81.92 784.384 116.736 819.2 161.792 819.2s79.872-34.816 79.872-79.872v-73.728c-2.048-43.008-36.864-77.824-79.872-77.824zM862.208 901.12c-88.064 0-161.792-71.68-161.792-161.792v-73.728c0-88.064 71.68-161.792 161.792-161.792s161.792 71.68 161.792 161.792v73.728c0 90.112-71.68 161.792-161.792 161.792z m0-313.344c-43.008 0-79.872 34.816-79.872 79.872v73.728c0 43.008 34.816 79.872 79.872 79.872 43.008 0 79.872-34.816 79.872-79.872v-73.728c0-45.056-34.816-79.872-79.872-79.872z"
                                        fill="#333333" p-id="6659"></path>
                                    <path d="M301.056 409.6a40.96 38.912 0 1 0 81.92 0 40.96 38.912 0 1 0-81.92 0Z"
                                        fill="#E5BD41" p-id="6660"></path>
                                    <path d="M641.024 409.6a40.96 38.912 0 1 0 81.92 0 40.96 38.912 0 1 0-81.92 0Z"
                                        fill="#E5BD41" p-id="6661"></path>
                                </svg>
                            </div>
                            <div class="feature-text">
                                <h3>高品质音频</h3>
                                <p>享受无损音质的听觉盛宴</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg t="1756447873681" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="11997" width="30" height="30">
                                    <path
                                        d="M512 128a32 32 0 0 1 32 32v704a32 32 0 1 1-64 0v-704A32 32 0 0 1 512 128zM320 256a32 32 0 0 1 32 32v448a32 32 0 1 1-64 0v-448A32 32 0 0 1 320 256z m384 0a32 32 0 0 1 32 32v448a32 32 0 1 1-64 0v-448A32 32 0 0 1 704 256z m192 128a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0v-192A32 32 0 0 1 896 384zM128 384a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0v-192A32 32 0 0 1 128 384z"
                                        fill="#2E3033" p-id="11998"></path>
                                </svg>
                            </div>
                            <div class="feature-text">
                                <h3>智能播放</h3>
                                <p>创建专属音乐播放列表</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 右侧登录表单区域 -->
            <div class="login-section">
                <div class="login-content">
                    <h2 class="login-title">登录</h2>
                    <p class="login-subtitle">
                        没有账号?
                        <a href="#" class="register-link" @click.prevent="handleSwitchToRegister">点击注册</a>
                        <a href="#" class="register-link" style="float: right;">忘记密码</a>
                    </p>

                    <form class="login-form">
                        <div class="form-group">
                            <input type="text" placeholder="手机/邮箱/个人账号" v-model="username" class="form-input">
                        </div>

                        <div class="form-group">
                            <input :type="showPassword ? 'text' : 'password'" placeholder="请输入密码" v-model="password"
                                class="form-input">
                        </div>

                        <a-row class="grid-demo" :gutter="24">
                            <a-col :span="16">
                                <input placeholder="验证码" v-model="captcha" class="form-input-code">
                            </a-col>
                            <a-col :span="8">
                                <img :src="ImagePath.captchaCode" alt="验证码" class="captcha-code"></img>
                            </a-col>
                        </a-row>

                        <div class="form-options">
                            <label class="remember-me">
                                <input type="checkbox" v-model="rememberMe">
                                <span>记住我</span>
                            </label>
                            <a href="#" class="forgot-password">短信验证登录</a>
                        </div>

                        <button type="submit" class="login-btn">登录</button>

                        <div class="divider">
                            <span>已有账号，忘记密码?</span>
                        </div>

                        <!-- <div class="other-methods">
                            <span>其他方式登录</span>
                        </div> -->
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="LoginFrom">
import { ref } from 'vue'
import { ImagePath } from '@renderer/utils/ImagePath'

// 定义事件发射器
const emit = defineEmits<{
    'switch-to-register': []
}>()

// 响应式数据
const username = ref('')
const password = ref('')
const captcha = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)

// 切换到注册页面的处理函数
const handleSwitchToRegister = () => {
    emit('switch-to-register')
}
</script>

<style lang="scss" scoped>
.grid-demo .arco-col {
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
}

.grid-demo .arco-col>div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}


.login-register-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.login-card {
    display: flex;
    width: 70%;
    max-width: 1000px;
    height: 70%;
    max-height: 700px;
    background: white;
    border-radius: var(--gz-element-round-radian1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    z-index: 2;
}

// 左侧品牌区域
.brand-section {
    flex: 1;
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 40px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0,50 Q25,20 50,50 T100,50 L100,100 L0,100 Z" fill="rgba(255,255,255,0.1)"/></svg>') no-repeat center;
        background-size: cover;
    }
}

.brand-content {
    text-align: center;
    color: white;
    z-index: 1;
    position: relative;
}

.brand-logo {
    margin-bottom: 20px;
}

.wave-icon {
    font-weight: bold;
    // background-color: #00d4ff;
    text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
    aspect-ratio: 1 / 1;
    width: 80px;
}

.brand-title {
    font-size: 48px;
    font-weight: 700;
    margin: 20px 0 10px 0;
    letter-spacing: -1px;
}

.brand-subtitle {
    font-size: 18px;
    opacity: 0.9;
    margin-bottom: 50px;
    font-weight: 300;
}

.features {
    text-align: left;
    max-width: 300px;
}

.feature-item {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .feature-icon {
        font-size: 24px;
        margin-right: 20px;
        width: 50px;
        height: 50px;
        background: rgba(255, 255, 255, 0.2);
        // border-radius: 12px;
        border-radius: var(--gz-element-round-radian1);
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(10px);
    }

    .feature-text {
        h3 {
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 5px;
        }

        p {
            font-size: 14px;
            opacity: 0.8;
            margin: 0;
            line-height: 1.4;
        }
    }
}

// 右侧登录区域
.login-section {
    flex: 1;
    // background: #1a1a1a;
    background: linear-gradient(90deg, #121212 40%, #181818 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 40px;
}

.login-content {
    width: 100%;
    max-width: 400px;
    color: white;
}

.login-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #ffffff;
    text-align: left;
}

.login-subtitle {
    font-size: 14px;
    color: #888;
    margin-bottom: 20px;
    text-align: left;

    .register-link {
        color: #4a9eff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}

.login-form {
    width: 100%;
}

.form-group {
    margin-bottom: 15px;
}

.captcha-code {
    width: 100%;
    height: 40px;
    border-radius: 5px;
}

.form-input {
    width: 100%;
    padding: 10px;
    background: #2a2a2a;
    border: 1px solid #333;
    border-radius: var(--gz-element-round-radian1);
    color: white;
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease;

    &::placeholder {
        color: #666;
    }

    &:focus {
        border-color: #4a9eff;
        box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.2);
    }
}

.form-input-code {
    width: 100%;
    padding: 10px;
    height: 40px;
    background: #2a2a2a;
    border: 1px solid #333;
    border-radius: var(--gz-element-round-radian1);
    color: white;
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease;

    &::placeholder {
        color: #666;
    }

    &:focus {
        border-color: #4a9eff;
        box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.2);
    }
}

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    .remember-me {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #ccc;
        font-size: 14px;

        input[type="checkbox"] {
            margin-right: 8px;
            accent-color: #4a9eff;
        }
    }

    .forgot-password {
        color: #4a9eff;
        text-decoration: none;
        font-size: 14px;

        &:hover {
            text-decoration: underline;
        }
    }
}

.login-btn {
    width: 100%;
    padding: 15px;
    background: #ff6b35;
    border: none;
    border-radius: var(--gz-element-round-radian1);
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 25px;

    &:hover {
        background: #e55a2b;
        transform: translateY(-1px);
    }
}

.divider {
    text-align: center;
    margin: 15px 0 25px 0;

    span {
        color: #666;
        font-size: 14px;
    }
}

.oauth-login {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 25px;

    .oauth-item {
        .oauth-icon {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;

            &.github {
                background: #333;
                color: #fff;
            }

            &.firefox {
                background: #ff9500;
                color: #fff;
            }

            &.huawei {
                background: #ff0000;
                color: #fff;
            }

            &.more {
                background: #666;
                color: #fff;
            }

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }
        }
    }
}

.oauth-text {
    margin-bottom: 20px;

    .oauth-green {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        color: #4CAF50;
        font-size: 14px;
        cursor: pointer;

        .oauth-icon-text {
            font-size: 16px;
        }

        &:hover {
            opacity: 0.8;
        }
    }
}

// .other-methods {
//     text-align: center;

//     span {
//         color: #666;
//         font-size: 14px;
//         cursor: pointer;

//         &:hover {
//             color: #4a9eff;
//         }
//     }
// }


// 响应式设计
@media (max-width: 1024px) {
    .login-card {
        width: 95%;
        height: 80%;
    }
}

@media (max-width: 768px) {
    .login-card {
        flex-direction: column;
        width: 95%;
        height: auto;
        max-height: 95vh;
        overflow-y: auto;
    }

    .brand-section {
        padding: 30px 20px;
        min-height: 300px;

        .brand-title {
            font-size: 36px;
        }

        .brand-subtitle {
            margin-bottom: 30px;
        }

        .features {
            display: none;
        }
    }

    .login-section {
        padding: 30px 20px;
        min-height: auto;
    }

    .login-content {
        max-width: 100%;
    }

    .login-title {
        font-size: 28px;
    }

    .oauth-login {
        gap: 12px;

        .oauth-item .oauth-icon {
            width: 40px;
            height: 40px;
        }
    }
}

@media (max-width: 480px) {
    .login-register-container {
        padding: 10px;
    }

    .login-card {
        width: 100%;
        border-radius: 15px;
    }

    .brand-section {
        padding: 25px 15px;
        min-height: 250px;

        .brand-title {
            font-size: 28px;
        }

        .brand-subtitle {
            font-size: 16px;
            margin-bottom: 20px;
        }

        .wave-icon {
            width: 60px;
        }
    }

    .login-section {
        padding: 25px 15px;
    }

    .login-title {
        font-size: 24px;
    }

    .form-input {
        padding: 12px 15px;
        font-size: 14px;
    }

    .login-btn {
        padding: 12px;
        font-size: 14px;
    }

    .oauth-login {
        gap: 10px;

        .oauth-item .oauth-icon {
            width: 35px;
            height: 35px;
        }
    }

    .form-options {
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
    }
}
</style>