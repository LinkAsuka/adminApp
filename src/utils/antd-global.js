import zh_CN from "antd/lib/locale/zh_CN";

const validateMessages = {
  required: "请输入${label}!",
};
export default {
  locale: zh_CN, //国际化
  componentSize: "small", //全局组件大小
  form: {
    validateMessages: validateMessages,
  },
};
