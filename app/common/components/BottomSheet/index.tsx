import * as Dialog from '@radix-ui/react-dialog';

import * as s from './style.css';

interface SheetItem {
  id: string;
  label: string;
  selected?: boolean;
  onSelect: () => void;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  items: SheetItem[];
}
const BottomSheet = ({ open, onOpenChange, title, items }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange} modal={false}>
      <Dialog.Portal>
        {open && <div className={s.Overlay} />}
        <Dialog.Content className={s.Content}>
          {title && <div className={s.Header}>{title}</div>}
          <div className={s.List}>
            {items.map((item) => (
              <button
                key={item.id}
                className={s.Item({ selected: Boolean(item.selected) })}
                onClick={item.onSelect}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default BottomSheet;
