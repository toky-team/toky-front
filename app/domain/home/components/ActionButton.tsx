import { tv, type VariantProps } from "tailwind-variants";
import { Link } from "react-router";

const actionButtonVariants = tv({
  slots: {
    root: "flex flex-col gap-2 justify-between",
    description: "text-sm text-white",
  },
});

interface ActionButtonProps extends VariantProps<typeof actionButtonVariants> {
  link: string;
  className?: string;
  image?: string;
  description?: string;
}

const ActionButton = ({ link, className, image, description }: ActionButtonProps) => {
  const { root, description: descriptionClass } = actionButtonVariants();

  return (
    <div className={root({ className })}>
      <Link to={link}>
        {image ? <img src={image} /> : <div className="w-13 h-13 bg-gray-200" />}
      </Link>
      {description && <div className={descriptionClass()}>{description}</div>}
    </div>
  );
};

export default ActionButton;