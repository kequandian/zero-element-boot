const React = require('react');
const { useImperativeHandle, forwardRef,  } = require('react');
const useLayout = require('@/hooks/useLayout');
const ContainerSet = require('../container');

export default forwardRef(function NamedContainer({ name, props, children, ...rest }, ref) {

  // ref
  const [CartRef, { getClassName }] = useLayout();

  useImperativeHandle(ref, () => ({
    getClassName: getClassName,
  }));

  // NamedContainerSet
  const NamedContainer = ContainerSet[name] || tips(name);

  return (
      <NamedContainer {...props} ref={CartRef}>
        {React.Children.toArray(children).map(child => {
          return React.cloneElement(child, {
            ...rest
          })
        })}
      </NamedContainer>
  )

})

function tips(name) {
  return _ => `NamedContainer ${name} 未定义`;
}