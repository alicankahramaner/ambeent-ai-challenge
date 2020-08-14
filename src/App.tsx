import React from 'react';
import { Card } from './components/card';
import { Alert } from './components/alert';
import { ShiftOfDay } from './components/shiftofday';
import { ShiftDto, ShiftOfDayDto, DefaultShiftDto, KeyAndValueDto } from './models';
import { Container } from './components/grid/container';
import { Row } from './components/grid/row';
import { Col } from './components/grid/col';
import { DefaultWorkTime } from './components/defaultWorkTime';
const dummyData = require('./dummyData.json');

export class App extends React.Component<any, ShiftDto> {
  private timer: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.timer = setInterval(() => this.getData(), 2000);
  }

  state = {
    default: {
      startHour: 0,
      startMinute: 0
    },
    shift: []
  }

  private daysOfWeek: KeyAndValueDto[] = [
    {
      key: 'monday',
      value: "Pazartesi",
    },
    {
      key: 'tuesday',
      value: "Salı"
    },
    {
      key: 'wednesday',
      value: 'Çarşamba'
    },
    {
      key: 'thursday',
      value: 'Perşembe'
    },
    {
      key: 'friday',
      value: 'Cuma'
    },
    {
      key: 'saturday',
      value: 'Cumartesi'
    },
    {
      key: 'sunday',
      value: 'Pazar'
    }
  ]

  private getData() {
    this.setState({ ...dummyData });

    this.timer && clearInterval(this.timer);
  }

  private saveShiftData(data: ShiftOfDayDto, index: number) {
    this.setState(state => {
      let shifts = state.shift;
      shifts[index] = data;

      return {
        default: this.state.default,
        shift: shifts
      }
    });
  }

  private saveDefaultWorkTimeData(data: DefaultShiftDto) {
    this.setState({
      ...this.state,
      default: data
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <nav className="breadcrumb">
              <a href="#settings">Ayarlar</a>
              <a href="#worktimes">Çalışma Saatleri</a>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Alert
                message="Yetkili servis çalışma saatlerini buradan ayarlayabilirsiniz."
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <DefaultWorkTime
              data={this.state.default}
              onSave={(data) => this.saveDefaultWorkTimeData(data)}
            />
          </Col>
        </Row>
        <Row>
          {
            this.state.shift.map((shift: ShiftOfDayDto, index: number) => {
              return (
                <Col key={`col_${index}`} breakpoints={
                  {
                    md: 4,
                    xl: 3
                  }
                }>
                  <ShiftOfDay
                    data={shift}
                    key={`shift_${index}`}
                    day={this.daysOfWeek[index]}
                    onSave={(e) => this.saveShiftData(e, index)}
                  />
                </Col>
              );
            })
          }
        </Row>
      </Container >
    );
  }
}