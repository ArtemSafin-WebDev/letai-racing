import Validator from "./classes/Validator";

export default function forms() {
  const elements: HTMLFormElement[] = Array.from(
    document.querySelectorAll(".js-form")
  );

  elements.forEach((form) => {
    const validator = new Validator(form);
    form.addEventListener("submit", (event) => {
      validator.validate();
      if (!validator.valid) {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  });
}
