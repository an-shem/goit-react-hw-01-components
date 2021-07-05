import PropTypes from 'prop-types';
import { getRandomColor } from '../../utils/getRandomColor';
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
            <Percentage>{statsItem.percentage}%</Percentage>
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
