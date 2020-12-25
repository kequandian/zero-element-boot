const React = require('react');
const { useImperativeHandle, forwardRef,  } = require('react');
const useLayout = require('@/hooks/useLayout');
const ContainerSet = require('../container');

export default forwardRef(function NamedContainer({children, name, props, container={name, props}, ...rest }, ref) {

  // ref
  const [CartRef, { getClassName }] = useLayout();

  useImperativeHandle(ref, () => ({
    getClassName: getClassName,
  }));

  const containerName = (typeof container === 'string') ? container : container.name

  const NamedContainer = ContainerSet[containerName] || tips(containerName);

  return (
      <NamedContainer {...container.props} ref={CartRef}>
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