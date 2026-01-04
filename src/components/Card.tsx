import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeProps } from "@base-ui/react";
import { twMerge } from "tailwind-merge";

const cardVariants = cva("rounded-2xl border-3 border-border ", {
  variants: {
    variant: {
      raised: "shadow-raised",
      inset: "shadow-inset",
    },
  },
  defaultVariants: {
    variant: "raised",
  },
});

interface CardProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

export function Card(props: CardProps) {
  const mergedProps = mergeProps(props, {
    className: twMerge(
      cardVariants({ variant: props.variant }),
      props.className
    ),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}

//  ------------------------------------------------------------------------------------------------------------

const cardHeaderVariants = cva("flex flex-col space-y-1.5 p-6 ");

interface CardHeaderProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardHeaderVariants> {}

export function CardHeader(props: CardHeaderProps) {
  const mergedProps = mergeProps(props, {
    className: twMerge(cardHeaderVariants()),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}
//  ------------------------------------------------------------------------------------------------------------

const cardTitleVariants = cva("font-semibold leading-none tracking-tight");

interface CardTitleProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardTitleVariants> {}
export function CardTitle(props: CardTitleProps) {
  const mergedProps = mergeProps(props, {
    className: twMerge(cardTitleVariants()),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}
//  ------------------------------------------------------------------------------------------------------------
const cardDescriptionVariants = cva("text-sm text-muted-foreground");

interface CardDescriptionProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardDescriptionVariants> {}

export function CardDescription(props: CardDescriptionProps) {
  const mergedProps = mergeProps(props, {
    className: twMerge(cardDescriptionVariants()),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}
// ------------------------------------------------------------------------------------------------------------
const cardContentVariants = cva("p-6 pt-0");

interface CardContentProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardContentVariants> {}
export function CardContent(props: CardContentProps) {
  const mergedProps = mergeProps(props, {
    className: twMerge(cardContentVariants()),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}
// ------------------------------------------------------------------------------------------------------------
const cardFooterVariants = cva("p-6 pt-0");

interface CardFooterProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardFooterVariants> {}
export function CardFooter(props: CardFooterProps) {
  const mergedProps = mergeProps(props, {
    className: twMerge(cardFooterVariants()),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}
