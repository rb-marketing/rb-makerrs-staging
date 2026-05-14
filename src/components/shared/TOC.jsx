import { Fragment } from 'react'

export const TOC = ({ type, lenis, isRoot = false, isActive, ...props }) => {
 if (type === 'link') {
  const id = String(props?.href || '').replace('#', '')
  const active = isActive ? isActive(id) : false
  return (
    <a
      href={props?.href}
      data-toc-id={id}
      data-active={active ? 'true' : 'false'}
      onClick={(e) => {
        e.preventDefault();
        const el = id ? document.getElementById(id) : null;
        if (el) {
          if (lenis?.scrollTo) {
            lenis.scrollTo(el)
          } else {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }}
      className={active ? 'active toc-active' : ''}
      style={
        active ? { color: '#13c33f', paddingLeft: '16px' } : undefined
      }
    >
      {props?.text}
    </a>
  );
}


  const Wrapper = isRoot ? Fragment : 'div'
  const wProps = isRoot ? {} : { className: type == 'list' ? 'pl-2' : '' }
  return (
    <Wrapper {...wProps}>
      {props?.children?.map((c, i) => (
        <TOC key={i} {...c} isActive={isActive} lenis={lenis} />
      ))}
    </Wrapper>
  )
}
