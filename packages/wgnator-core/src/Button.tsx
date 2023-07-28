import * as React from "react";
import { styled } from "styled-components";

const S = {
  VariablesProvider: styled.div`
  /* Text-size styles */
--fonts---display---dispaly1_-bold: 48px;
--fonts---display---display1_-semi-bold: 48px;
--fonts---display---display2_-bold: 40px;
--fonts---display---display2_-semi-bold: 40px;
--fonts---display---display3_-bold: 32px;
--fonts---display---display3_-semi-bold: 32px;
--fonts---heading---heading1_-semi-bold: 28px;
--fonts---heading---heading1_-medium: 28px;
--fonts---heading---heading-2_-semi-bold: 24px;
--fonts---heading---heading2_-medium: 24px;
--fonts---heading---heading-3_-bold: 22px;
--fonts---heading---heading-3_-semi-bold: 22px;
--fonts---heading---heading-3_-medium: 22px;
--fonts---heading---heading-4_-bold: 20px;
--fonts---heading---heading-4_-semi-bold: 20px;
--fonts---heading---heading-4_-medium: 20px;
--fonts--body---body-1_-semi-bold: 20px;
--fonts--body---body-1_-medium: 20px;
--fonts--body---body-1_-regular: 20px;
--fonts--body---body-2_-semi-bold: 18px;
--fonts--body---body-2_-medium: 18px;
--fonts--body---body-2_-regular: 18px;
--fonts--body---body-3_-semi-bold: 16px;
--fonts--body---body-3_-medium: 16px;
--fonts--body---body-3_-regular: 16px;
--fonts--caption--caption1_-medium: 18px;
--fonts--caption--caption2_-regular: 16px;
--fonts--caption--caption3_-bold: 14px;
--fonts--caption--caption3_-semi-bold: 14px;
--fonts--caption--caption3_-regular: 14px;
--fonts--caption--caption4_-bold: 12px;
--fonts--caption--caption4_-semi-bold: 12px;
--fonts--caption--caption4_-regular: 12px;


  --density-buttons-ph: var(--primitive-size-padding-padding-l);
  --density-buttons-pv: var(--primitive-size-padding-padding-m);
  --density-input-ph: var(--primitive-size-size-8);
  --density-input-pv: var(--primitive-size-size-16);
  --density-input-radius: var(--primitive-size-size-8);
  --density-radius: var(--primitive-size-radius-radius-xl);
  --primitive-size-padding-padding-l: var(--primitive-size-size-24);
  --primitive-size-padding-padding-m: var(--primitive-size-size-16);
  --primitive-size-padding-padding-s: var(--primitive-size-size-8);
  --primitive-size-padding-padding-xl: var(--primitive-size-size-32);
  --primitive-size-padding-padding-xs: var(--primitive-size-size-4);
  --primitive-size-padding-padding-xxl: var(--primitive-size-size-64);
  --primitive-size-radius-radius-l: var(--primitive-size-size-32);
  --primitive-size-radius-radius-m: var(--primitive-size-size-16);
  --primitive-size-radius-radius-s: var(--primitive-size-size-8);
  --primitive-size-radius-radius-xl: var(--primitive-size-size-80);
  --primitive-size-size-16: 16px;
  --primitive-size-size-24: 24px;
  --primitive-size-size-32: 32px;
  --primitive-size-size-4: 4px;
  --primitive-size-size-40: 40px;
  --primitive-size-size-48: 48px;
  --primitive-size-size-56: 56px;
  --primitive-size-size-64: 64px;
  --primitive-size-size-72: 72px;
  --primitive-size-size-8: 8px;
  --primitive-size-size-80: 80px;
  --primitive-size-spacing-spacing-l: var(--primitive-size-size-16);
  --primitive-size-spacing-spacing-m: var(--primitive-size-size-8);
  --primitive-size-spacing-spacing-s: var(--primitive-size-size-4);
  --primitive-size-spacing-spacing-xl: var(--primitive-size-size-24);
  --primitive-size-spacing-spacing-xxl: var(--primitive-size-size-32);
  --background-bg-default: var(--gray-white);
  --background-bg-diable: var(--gray-gray-50);
  --blue-blue-100: #CCDCFFFF;
  --blue-blue-200: #A6C6FFFF;
  --blue-blue-300: #7EB0FFFF;
  --blue-blue-400: #4F9BFFFF;
  --blue-blue-50: #EFF3FFFF;
  --blue-blue-500: #0087F7FF;
  --blue-blue-600: #0073E2FF;
  --blue-blue-700: #005FC6FF;
  --blue-blue-800: #004CA4FF;
  --blue-blue-900: #003A7DFF;
  --gray-black: #000000FF;
  --gray-gray-100: #D9DDE3FF;
  --gray-gray-200: #C1C7D0FF;
  --gray-gray-300: #AAB1BCFF;
  --gray-gray-400: #939CA9FF;
  --gray-gray-50: #F2F4F6FF;
  --gray-gray-500: #7D8795FF;
  --gray-gray-600: #697380FF;
  --gray-gray-700: #565F6BFF;
  --gray-gray-800: #444C56FF;
  --gray-gray-900: #343A42FF;
  --gray-white: #FFFFFFFF;
  --green-green-100: #BCE7CFFF;
  --green-green-200: #8FD5B1FF;
  --green-green-300: #64C395FF;
  --green-green-400: #35AF7BFF;
  --green-green-50: #E8F7EFFF;
  --green-green-500: #009A64FF;
  --green-green-600: #008550FF;
  --green-green-700: #006F3FFF;
  --green-green-800: #005A31FF;
  --green-green-900: #004425FF;
  --neutral-neutral-100: var(--gray-gray-100);
  --neutral-neutral-200: var(--gray-gray-200);
  --neutral-neutral-300: var(--gray-gray-300);
  --neutral-neutral-400: var(--gray-gray-400);
  --neutral-neutral-50: var(--gray-gray-50);
  --neutral-neutral-500: var(--gray-gray-500);
  --neutral-neutral-600: var(--gray-gray-600);
  --neutral-neutral-700: var(--gray-gray-700);
  --neutral-neutral-800: var(--gray-gray-800);
  --neutral-neutral-900: var(--gray-gray-900);
  --orange-orange-100: #FFCCB0FF;
  --orange-orange-200: #FFAB80FF;
  --orange-orange-300: #FF8B55FF;
  --orange-orange-400: #FF6C2FFF;
  --orange-orange-50: #FFEEE4FF;
  --orange-orange-500: #EE5007FF;
  --orange-orange-600: #D53600FF;
  --orange-orange-700: #B82200FF;
  --orange-orange-800: #971500FF;
  --orange-orange-900: #751000FF;
  --primary-primary-100: var(--blue-blue-100);
  --primary-primary-200: var(--blue-blue-200);
  --primary-primary-300: var(--blue-blue-300);
  --primary-primary-400: var(--blue-blue-400);
  --primary-primary-50: var(--blue-blue-50);
  --primary-primary-500: var(--blue-blue-500);
  --primary-primary-600: var(--blue-blue-600);
  --primary-primary-700: var(--blue-blue-700);
  --primary-primary-800: var(--blue-blue-800);
  --primary-primary-900: var(--blue-blue-900);
  --purple-purple-100: #DCD8FFFF;
  --purple-purple-200: #C3BFFFFF;
  --purple-purple-300: #A9A7FFFF;
  --purple-purple-400: #8E91FAFF;
  --purple-purple-50: #F4F2FFFF;
  --purple-purple-500: #747BEBFF;
  --purple-purple-600: #5B67D6FF;
  --purple-purple-700: #4654BBFF;
  --purple-purple-800: #35439AFF;
  --purple-purple-900: #293276FF;
  --red-red-100: #FFCAC0FF;
  --red-red-200: #FFA69AFF;
  --red-red-300: #FF8278FF;
  --red-red-400: #FF5E5BFF;
  --red-red-50: #FFEDEAFF;
  --red-red-500: #FA3B43FF;
  --red-red-600: #E11430FF;
  --red-red-700: #C30021FF;
  --red-red-800: #A10017FF;
  --red-red-900: #7C0011FF;
  --text-color-text-surface-accent: var(--gray-gray-700);
  --text-color-text-surface-default: var(--gray-black);
  --text-color-text-surface-description: var(--gray-gray-700);
  --text-color-text-surface-disabled: var(--gray-gray-300);
  --text-color-text-surface-error: var(--red-red-500);
  --text-color-text-surface-placeholder: var(--gray-gray-400);
  --text-on-surface: var(--neutral-neutral-900);
  --yellow-yellow-100: #F6D9A7FF;
  --yellow-yellow-200: #E9C171FF;
  --yellow-yellow-300: #D8AA3FFF;
  --yellow-yellow-400: #C49400FF;
  --yellow-yellow-50: #FEF2E1FF;
  --yellow-yellow-500: #AD7F00FF;
  --yellow-yellow-600: #966B00FF;
  --yellow-yellow-700: #7E5800FF;
  --yellow-yellow-800: #674600FF;
  --yellow-yellow-900: #503500FF;

  `,
  Container: styled.div`
display: inline-flex;
padding: var(--density-buttons-pv, 4px) var(--density-buttons-ph, 8px);
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 0;
background: var(--primary-primary-500, #0087F7);
  `,
  Text: styled.div`
    color: var(--primary-primary-50, #EFF3FF);

    /* fonts/body/Body 3_Medium */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
  `
}
export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
  <S.VariablesProvider>
    <S.Container>
      {props.children}
    </S.Container>
  </S.VariablesProvider>
  );
}

Button.displayName = "Button";
