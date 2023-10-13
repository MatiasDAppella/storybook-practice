import Header from "./Header";

export default {
  title: "components/Header",
  component: Header,
  args: {
    navigation: [
      { content:"Home", href:"/" },
      { content:"About", href:"/about" },
      { content:"Products", href:"/products" },
    ]
  }
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});