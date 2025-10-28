/**
 * Utility to strip custom item-level event props that should not reach DOM.
 * Removes keys like onItemAdded, onItemDeleted, onItemChanged, onItemSelected,
 * onItemIndicated, onAutoPreview, and internal __onIndicatorClick.
 * Leaves standard React DOM events (onClick, onChange, etc.) intact.
 */
export function omitItemEventProps(props = {}) {
  const forbidden = new Set([
    'onItemAdded',
    'onItemDeleted',
    'onItemChanged',
    'onItemSelected',
    'onItemIndicated',
    'onAutoPreview',
    '__onIndicatorClick',
  ]);
  const out = {};
  for (const key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key)) {
      if (forbidden.has(key)) continue;
      // Also guard generic pattern onItemXxx
      if (/^onItem[A-Z]/.test(key)) continue;
      out[key] = props[key];
    }
  }
  return out;
}

/**
 * Build a style object from props, dropping any custom event keys.
 * If a `style` prop exists, returns it directly; otherwise returns props
 * filtered by omitItemEventProps for backward compatibility with legacy code
 * that passed style keys directly.
 */
export function extractStyleProps(props = {}) {
  if (props && typeof props.style === 'object') {
    return props.style;
  }
  return omitItemEventProps(props);
}