import FooterLogo from "../../../../assets/footer_logo.svg?react";

export const Footer = () => {
  return (
    <div className="hidden lg:flex px-20 py-10 bg-footer flex-col place-items-center">
      <FooterLogo />
      <p className="font-extralight text-sm text-gray-50 mt-4">© 2023 Bewakoof Private Limited. All Rights Reserved.</p>
    </div>
  );
};
