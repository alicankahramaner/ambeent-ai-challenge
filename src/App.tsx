import React from 'react';
import { Checkbox } from './components/checkbox';
import { Input } from './components/input';
import { Card } from './components/card';
import { Alert } from './components/alert';
import { TimeInput } from './components/timeinput';

export class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Card>
            <Alert
              message="Yetkili servis çalışma saatlerini buradan ayarlayabilirsiniz."
            />
          </Card>

          <Card
            title="Varsayılan Çalışma Saati"
            subTitle="Bu ayar tatil olan günlerde, gece nöbetinin ayarlanabilmesi için önemlidir"
          >

            <TimeInput
              label="Başlangıç"
              data={{ min: 0, hour: 0 }}
            />

          </Card>
          <Card>

          </Card>
        </div>
      </React.Fragment>
    );
  }
}