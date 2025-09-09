<template>
    <div class="register-from">
        <div class="register-card">

            <div class="login-back">
                <p><a href="#" @click.prevent="handleSwitchToLogin" class="back-to-login-link">已有账号，返回登录</a></p>
            </div>

            <div class="background-logo">
                <img :src="ImagePath.logoUrl" alt="background-logo">
            </div>
            <a-space direction="vertical" class="card-layout" fill>

                <!-- 头部 -->
                <div class="register-header">
                    <div class="logo">用户注册</div>
                    <div class="logo-title">GZMusic - 探索无限音乐世界</div>
                </div>

                <!-- 步骤条 -->
                <div class="register-steps">
                    <div class="step" :class="{ active: currentStep >= 1, completed: currentStep > 1 }">
                        <div class="step-number">1</div>
                        <!-- <div class="step-label">注册方式</div> -->
                    </div>
                    <div class="step-line" :class="{ active: currentStep > 1 }"></div>
                    <div class="step" :class="{ active: currentStep >= 2, completed: currentStep > 2 }">
                        <div class="step-number">2</div>
                    </div>
                    <div class="step-line" :class="{ active: currentStep > 2 }"></div>
                    <div class="step" :class="{ active: currentStep >= 3, completed: currentStep > 3 }">
                        <div class="step-number">3</div>
                    </div>
                    <div class="step-line" :class="{ active: currentStep > 3 }"></div>
                    <div class="step" :class="{ active: currentStep >= 4, completed: currentStep > 4 }">
                        <div class="step-number">4</div>
                    </div>
                    <div class="step-line" :class="{ active: currentStep > 4 }"></div>
                    <div class="step" :class="{ active: currentStep >= 5, completed: currentStep > 5 }">
                        <div class="step-number">5</div>
                    </div>
                </div>

                <!-- 注册步骤具体页面 -->
                <div class="register-step-content">
                    <!-- 根据 currentStep 显示不同的注册步骤内容 -->
                    <div v-if="currentStep === 1" class="step-content">
                        <div class="step-title">选择注册方式</div>
                        <div class="register-options">
                            <div class="option-card" :class="{ active: selectedMethod === 'email' }"
                                @click="selectMethod('email')">
                                <div class="option-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor"
                                            stroke-width="2" />
                                        <path d="m22 7-10 5L2 7" stroke="currentColor" stroke-width="2" />
                                    </svg>
                                </div>
                                <div class="option-text">邮箱注册</div>
                            </div>
                            <div class="option-card" :class="{ active: selectedMethod === 'phone' }"
                                @click="selectMethod('phone')">
                                <div class="option-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor"
                                            stroke-width="2" />
                                        <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" />
                                    </svg>
                                </div>
                                <div class="option-text">手机号码注册</div>
                            </div>
                        </div>
                        <div class="step-actions">
                            <button class="next-btn next-one-but" :disabled="!selectedMethod"
                                @click="nextStep">下一步</button>
                        </div>
                    </div>
                    <div v-else-if="currentStep === 2" class="step-content">
                        <div class="step-title">验证信息</div>
                        <div class="form-group">
                            <label class="form-label">邮箱地址</label>
                            <input type="email" class="form-input" placeholder="请输入邮箱地址" v-model="emailAddress" />
                        </div>
                        <div class="form-group">
                            <label class="form-label">验证码</label>
                            <div class="verification-input-group">
                                <input type="text" class="form-input verification-input" placeholder="请输入验证码"
                                    v-model="verificationCode" />
                                <button class="get-code-btn" :disabled="!emailAddress || countdown > 0"
                                    @click="getVerificationCode">
                                    {{ countdown > 0 ? `${countdown}s` : '获取验证码' }}
                                </button>
                            </div>
                        </div>
                        <div class="step-actions">
                            <button class="prev-btn" @click="prevStep">上一步</button>
                            <button class="next-btn" :disabled="!emailAddress || !verificationCode"
                                @click="nextStep">下一步</button>
                        </div>
                    </div>
                    <div v-else-if="currentStep === 3">
                        <div class="step-content">
                            <h2 class="step-title">设置用户名</h2>

                            <div class="form-group">
                                <label class="form-label">用户名</label>
                                <div class="username-input-group">
                                    <input type="text" class="form-input username-input" placeholder="请输入用户名"
                                        v-model="username" maxlength="20" />
                                    <button type="button" class="random-btn" @click="generateRandomUsername">
                                        随机生成
                                    </button>
                                </div>
                            </div>

                            <div class="step-actions">
                                <button class="prev-btn" @click="prevStep">上一步</button>
                                <button class="next-btn" :disabled="!username.trim()" @click="nextStep">下一步</button>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="currentStep === 4">
                        <div class="step-content">
                            <h2 class="step-title">设置密码</h2>

                            <div class="form-group">
                                <label class="form-label">密码</label>
                                <input type="password" class="form-input" placeholder="请输入密码" v-model="password"
                                    minlength="6" maxlength="20" />
                            </div>

                            <div class="form-group">
                                <label class="form-label">确认密码</label>
                                <input type="password" class="form-input" placeholder="请再次输入密码"
                                    v-model="confirmPassword" minlength="6" maxlength="20" />
                            </div>

                            <div class="step-actions">
                                <button class="prev-btn" @click="prevStep">上一步</button>
                                <button class="next-btn" :disabled="!isPasswordValid" @click="nextStep">下一步</button>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="currentStep === 5">
                        <!-- 第五步内容 -->
                        <div class="step-content">
                            <h2 class="step-title">软件注册码</h2>

                            <div class="form-group">
                                <label class="form-label">注册码</label>
                                <input class="form-input" placeholder="请输入软件注册码" v-model="captchaCode" minlength="6"
                                    maxlength="20" />
                            </div>

                            <div class="step-actions">
                                <button class="prev-btn" @click="prevStep">上一步</button>
                                <button class="next-btn" :disabled="!isPasswordValid" @click="nextStep">下一步</button>
                            </div>
                        </div>

                    </div>
                </div>
            </a-space>
        </div>
    </div>
</template>

<script lang="ts" setup name="RegisterFrom">
import { ref, computed } from 'vue'
import { ImagePath } from '@renderer/utils/ImagePath'

// 定义事件发射器
const emit = defineEmits<{
    'switch-to-login': []
}>()

// 响应式数据
const currentStep = ref(1)
const selectedMethod = ref('')
const emailAddress = ref('')
const verificationCode = ref('')
const countdown = ref(0)
const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const captchaCode = ref('')

// 计算属性
const isPasswordValid = computed(() => {
    return password.value.length >= 6 &&
        password.value.length <= 20 &&
        password.value === confirmPassword.value &&
        confirmPassword.value.length > 0
})

// 切换到登录页面的处理函数
const handleSwitchToLogin = () => {
    emit('switch-to-login')
}

// 方法
const selectMethod = (method: string) => {
    selectedMethod.value = method
}

const nextStep = () => {
    if (currentStep.value === 1 && selectedMethod.value) {
        currentStep.value++
    } else if (currentStep.value === 2 && emailAddress.value && verificationCode.value) {
        currentStep.value++
    } else if (currentStep.value === 3 && username.value.trim()) {
        currentStep.value++
    } else if (currentStep.value === 4 && isPasswordValid.value) {
        currentStep.value++
    }
}

const prevStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--
    }
}

const getVerificationCode = () => {
    if (!emailAddress.value || countdown.value > 0) return

    // 模拟发送验证码
    countdown.value = 60
    const timer = setInterval(() => {
        countdown.value--
        if (countdown.value <= 0) {
            clearInterval(timer)
        }
    }, 1000)
}

const generateRandomUsername = () => {
    const adjectives = ['快乐的', '聪明的', '勇敢的', '温柔的', '活泼的', '优雅的', '神秘的', '可爱的']
    const nouns = ['小猫', '小狗', '小鸟', '小熊', '小兔', '小鱼', '小鹿', '小狐狸']
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
    const randomNumber = Math.floor(Math.random() * 1000)
    username.value = `${randomAdjective}${randomNoun}${randomNumber}`
}
</script>

<style lang="scss" scoped>
.register-from {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.register-card {
    display: flex;
    width: 70%;
    max-width: 1000px;
    height: 70%;
    max-height: 650px;
    // background: white;
    // background: linear-gradient(135deg, #E5F29C 0%, #BAF29C 25%, #9CF2A9 50%, #9CF2D4 75%, #9CE5F2 100%);
    border-radius: var(--gz-element-round-radian1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    z-index: 2;
    position: relative;
}

.login-back {
    position: absolute;
    width: 100%;
    margin: 10px 0 0 10px;
    user-select: none;
    cursor: pointer;
    color: rgb(20, 20, 241);
    font-size: 0.9rem;

    p &:hover {
        text-decoration: underline;
    }
}

.back-to-login-link {
    color: #4f46e5;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;
    
    &:hover {
        color: #7c3aed;
        text-decoration: underline;
    }
}

.background-logo {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.8;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 100%;
        opacity: 0.2;
        padding: 30px;
    }
}

.card-layout {
    width: 100%;
    // background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
}

.register-header {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;

    .logo {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 10px;
        letter-spacing: -1px;
    }

    .logo-title {
        font-size: 18px;
        opacity: 0.9;
        margin-bottom: 20px;
        font-weight: 400;
    }
}

.register-steps {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    user-select: none;
    // background-color: red;

    .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0.5;
        transition: all 0.3s ease;

        &.active {
            opacity: 1;
        }

        &.completed {
            opacity: 1;

            .step-number {
                background: #4CAF50;
                border-color: #4CAF50;
            }
        }

        .step-number {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(102, 126, 234, 0.1);

            // border: 2px solid rgba(102, 126, 234, 0.3);
            border: 2px solid #4969f8;

            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 8px;
            transition: all 0.3s ease;

            // color: #667eea;
            color: #2e52f3;
        }

        .step-label {
            font-size: 12px;
            text-align: center;
            white-space: nowrap;
            color: #666;
        }

        &.active .step-number {
            background: #667eea;
            border-color: #667eea;
            color: white;
            box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);
        }

        &.active .step-label {
            color: #667eea;
            font-weight: 600;
        }
    }

    .step-line {
        width: 110px;
        height: 2px;
        background: rgba(92, 114, 212, 0.2);
        margin: 0 5px;
        transition: all 0.3s ease;
        align-self: flex-start;
        margin-top: 15px;

        &.active {
            background: #667eea;
        }
    }
}

// 移动端适配
@media (max-width: 480px) {
    .register-from {
        padding: 10px;
    }

    .register-card {
        width: 95%;
        height: 90%;
    }

    .register-header {
        .logo {
            font-size: 28px;
            margin: 15px 0 8px 0;
        }

        .logo-title {
            font-size: 14px;
            margin-bottom: 30px;
        }
    }

    .register-steps {
        margin: 20px 0;
        gap: 5px;

        .step {
            .step-number {
                width: 28px;
                height: 28px;
                font-size: 12px;
                margin-bottom: 6px;
            }

            .step-label {
                font-size: 10px;
            }
        }

        .step-line {
            width: 20px;
            margin: 0 3px;
        }
    }
}

// 步骤内容样式
.register-step-content {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.step-content {
    width: 100%;
    margin: 0 auto;
    padding: 15px;
    text-align: center;

    .step-title {
        font-size: 24px;
        font-weight: 600;
        color: #333;
        margin-bottom: 20px;
    }

    .register-options {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-bottom: 30px;
        flex-wrap: wrap;

        .option-card {
            width: 300px;
            height: 120px;
            border: 2px solid #e5e7eb;
            // border-radius: 12px;
            border-radius: var(--gz-element-round-radian1);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            background: #fff;
            position: relative;

            &:hover {
                border-color: #667eea;
                box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
            }

            &.active {
                border-color: #667eea;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);

                .option-icon svg {
                    color: white;
                }
            }

            .option-icon {
                margin-bottom: 12px;

                svg {
                    color: #667eea;
                    transition: color 0.3s ease;
                }
            }

            .option-text {
                font-size: 16px;
                font-weight: 500;
                color: #374151;
                transition: color 0.3s ease;
            }

            &.active .option-text {
                color: white;
            }
        }
    }

    .step-actions {
        display: flex;
        justify-content: center;
        gap: 20px;

        .next-btn,
        .prev-btn {
            width: 200px;
            height: 48px;
            border: none;
            border-radius: var(--gz-element-round-radian1);
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .next-one-but {
            width: 580px;
        }

        .next-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

            &:hover:not(:disabled) {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
            }

            &:disabled {
                background: #d1d5db;
                cursor: not-allowed;
                box-shadow: none;
                transform: none;
            }
        }

        .prev-btn {
            background: #f3f4f6;
            color: #6b7280;
            border: 1px solid #e5e7eb;

            &:hover {
                background: #e5e7eb;
                transform: translateY(-1px);
            }
        }
    }

    // 表单样式
    .form-group {
        margin-bottom: 24px;
        text-align: left;

        .form-label {
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            margin-bottom: 8px;
        }

        .form-input {
            width: 100%;
            height: 48px;
            padding: 0 16px;
            border: 2px solid #e5e7eb;
            border-radius: var(--gz-element-round-radian1);
            font-size: 16px;
            transition: all 0.3s ease;
            background: #fff;

            &:focus {
                outline: none;
                border-color: #667eea;
                box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            }

            &::placeholder {
                color: #9ca3af;
            }
        }

        .verification-input-group {
            display: flex;
            gap: 12px;

            .verification-input {
                flex: 1;
            }

            .get-code-btn {
                width: 120px;
                height: 48px;
                background: #667eea;
                color: white;
                border: none;
                border-radius: var(--gz-element-round-radian1);
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s ease;
                white-space: nowrap;

                &:hover:not(:disabled) {
                    background: #5a67d8;
                }

                &:disabled {
                    background: #d1d5db;
                    cursor: not-allowed;
                    color: #9ca3af;
                }
            }
        }

        .username-input-group {
            display: flex;
            gap: 12px;

            .username-input {
                flex: 1;
            }

            .random-btn {
                width: 120px;
                height: 48px;
                background: #667eea;
                color: white;
                border: none;
                border-radius: var(--gz-element-round-radian1);
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s ease;
                white-space: nowrap;

                &:hover {
                    background: #5a67d8;
                    transform: translateY(-1px);
                }

                &:active {
                    transform: translateY(0);
                }
            }
        }
    }
}

// 移动端适配 - 步骤内容
@media (max-width: 480px) {
    .step-content {
        padding: 20px 15px;

        .step-title {
            font-size: 20px;
            margin-bottom: 30px;
        }

        .register-options {
            flex-direction: column;
            align-items: center;
            gap: 15px;
            margin-bottom: 30px;

            .option-card {
                width: 100%;
                max-width: 280px;
                height: 100px;
            }
        }

        .step-actions {
            flex-direction: column;
            gap: 15px;

            .next-btn,
            .prev-btn {
                width: 100%;
                max-width: 280px;
            }
        }

        .form-group {
            margin-bottom: 20px;

            .form-label {
                font-size: 13px;
                margin-bottom: 6px;
            }

            .form-input {
                height: 44px;
                font-size: 14px;
            }

            .verification-input-group {
                flex-direction: column;
                gap: 10px;

                .get-code-btn {
                    width: 100%;
                    height: 44px;
                }
            }

            .username-input-group {
                flex-direction: column;
                gap: 10px;

                .random-btn {
                    width: 100%;
                    height: 44px;
                }
            }
        }
    }
}
</style>