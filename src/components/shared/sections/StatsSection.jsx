import { Fragment } from 'react'
import { LineHeading } from '../Heading'
import { RollupNumber } from '../RollupNumber'
import styles from '@/styles/sections/StatsSection.module.scss'

export const stats = [
  {
    id: 0,
    countUpProps: {
      value: 30,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <span className="md:max-w-[188px]">
         brands
        <br /> powered
      </span>
    ),
  },
  {
    id: 1,
    countUpProps: {
      value: 1,
      suffix: (
        <div className="inline-flex">
          K <span className="text-rb-red">+</span>
        </div>
      ),
    },
    text: (
      <>
        Add commentMore actions brand
        <br />
        solutions
      </>
    ),
  },
  {
    id: 2,
    countUpProps: {
      value: 20,
      suffix: (
        <span className="inline-flex">
          <span className="text-rb-red">+</span>
        </span>
      ),
    },
    text: (
      <>
        Add commentMore actions industries
        <br />
        championed
      </>
    ),
  },
  {
    id: 3,
    countUpProps: {
      value: 50,
      suffix: <span className="text-rb-red">+</span>,
    },
    text: (
      <>
        thinkers and
        <br />
        storytellers
      </>
    ),
  },
]

const StatBody = ({ stat }) => (
  <>
    <RollupNumber
      value={stat.value}
      suffix={
        <div className="inline-flex">
          {stat.suffix}
          {stat.symbol && <span className="text-rb-red">{stat.symbol}</span>}
        </div>
      }
    />
    <div className="text-sm leading-[17px] md:text-2xl md:leading-7 tracking-normal md:tracking-[-0.96px] text-rb-black mt-0 md:mt-3 md:ml-[6px] font-medium font-everett">
      {stat.text}
    </div>
  </>
)

// Opt-in layout, currently only the Infosys x WSJ case study. Below `lg` it is
// a 2-column grid (an odd-numbered last stat spans the full row); from `lg` up
// it is a single flex row where every column shrinks to its own content instead
// of a fixed 1/4 width, and the leftover space is absorbed by the separators
// between them (`.divider` has flex-grow, so every gap comes out identical and
// each rule lands exactly halfway between the two stats it separates).
// The default layout below keeps the fixed 1/4 columns and the hand-tuned
// `right: -63px/-34px` pseudo-element offsets, which only line up for one
// specific set of caption widths — hence this alternative for stats whose
// captions are much wider than that.
const EvenStatsRow = ({ list, gridClassName }) => (
  // lg:gap-x-0 — from `lg` up the spacing between stats comes from the
  // `.divider` elements themselves (min-width 64px, then flex-grow), so an
  // extra column-gap would only eat width and wrap the captions.
  <div
    className={`grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-16 md:gap-y-6 lg:flex lg:items-stretch lg:gap-x-0 ${gridClassName}`}
  >
    {list.map((s, i) => (
      <Fragment key={s.id}>
        {i > 0 && (
          <span aria-hidden="true" className={`hidden lg:block ${styles.divider}`} />
        )}
        <div
          className={`w-full lg:w-auto text-[42px] leading-14 tracking-[-1.44px] md:text-stat ${
            list.length % 2 !== 0 && i === list.length - 1
              ? 'col-span-2 lg:col-span-1'
              : ''
          } ${
            // In the tablet grid the separator has to be drawn on the left-hand
            // stat of each row instead — index parity decides it, so it stays
            // correct no matter how many stats there are.
            i % 2 === 0 && i !== list.length - 1 ? styles.gridline : ''
          }`}
        >
          <StatBody stat={s} />
        </div>
      </Fragment>
    ))}
  </div>
)

export const StatsSection = ({
  className = '',
  data = [],
  tag = 'OUR PRODUCTION BACKYARD',
  gridClassName = 'md:right-[4em]',
  // Opt-in only — see EvenStatsRow. Every other stat section keeps the
  // original fixed-column layout untouched.
  evenRow = false,
}) => {
  const list = data?.length ? data : stats
  return (
    <section className={`bg-white overflow-hidden ${className}`}>
      <div className="container">
        <LineHeading className="mb-6 md:mb-7.5">{tag}</LineHeading>
        {evenRow ? (
          <EvenStatsRow list={list} gridClassName={gridClassName} />
        ) : (
          <div
            className={`grid lg:flex grid-cols-2 gap-x-5 md:gap-x-[124px] gap-y-12 md:gap-y-6 max-w-full md:max-w-none mx-5 md:!ml-0 md:relative ${gridClassName}`}
          >
            {list.map((s, i) => (
              <div
                className={`w-full lg:w-1/4 text-[42px] leading-14 tracking-[-1.44px] md:text-stat group relative ${styles.statline}`}
                key={s.id}
              >
                <div className={`${i == 2 && 'lg:ml-[20%]'}`}>
                  <div className="lg:w-fit lg:mx-auto">
                    <StatBody stat={s} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
