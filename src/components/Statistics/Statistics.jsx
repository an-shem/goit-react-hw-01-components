import PropTypes from 'prop-types';
import {
  StatisticSection,
  StatisticTitle,
  StatLlist,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <StatisticSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatLlist>
        {stats.map(statsItem => (
          <Item key={statsItem.id} color={getRandomColor()}>
            <Label>{statsItem.label}</Label>
            <Percentage>{statsItem.percentage}</Percentage>
          </Item>
        ))}
      </StatLlist>
    </StatisticSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}
