import { demo } from "../blocks/demo";

export const useTranslation = () => {
  return demo.connect("core").methods.useTranslation();
};
