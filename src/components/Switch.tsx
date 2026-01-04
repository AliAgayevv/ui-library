import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeProps, Switch } from "@base-ui/react";

const switchVariants = cva(
  "inline-block cursor-pointer h-5.5 w-12 rounded-full focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-foreground focus-visible:ring-2 bg-background shadow-inset data-[checked]:bg-primary duration-350 ease-out transition-all data-[checked]:border-none"
);
const thumbVariants = cva(
  "h-5 w-5 bg-background relative block shadow-inset translate-x-0 data-[checked]:translate-x-6.5 rounded-full transition-transform duration-350 ease-out border-1 border-highlight after:w-1 after:h-1 after:bg-muted-foreground after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-1/2 after:rounded-full data-[checked]:after:bg-primary"
);

interface NeuSwitchProps
  extends useRender.ComponentProps<"switch">,
    VariantProps<typeof switchVariants> {}

export default function NeuSwitch(props: NeuSwitchProps) {
  const mergedProps = mergeProps(props, {
    className: switchVariants(),
  });

  const thumbProps = mergeProps(props, {
    className: thumbVariants(),
  });

  return (
    <Switch.Root {...mergedProps}>
      <Switch.Thumb {...thumbProps} />
    </Switch.Root>
  );
}
