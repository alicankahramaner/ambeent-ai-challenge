# Ambeent.ai Front-End Challenge

## İstenilen Çalışmanın Detayları

1. Çalışma tasarımı design.png dosyasındaki olacak.
2. Aşağıdaki dummy data formatında bir datanın oluşturulması ve 2 saniyelik bir timeOut ile state'e set edilmesi. (API'dan alınmış gibi)
3. Data içinde shiftlerden `isHoliday` property'si true olanların ekranda checkbox'ın `checked` olarak ayarlanması ve gösterilmesi sağlanmalıdır.
4. Her bir kartın (tasarımda gözükmekte olan günler) kaydet butonu `disabled` olacaktır. `enabled` Olabilmesi için kart içindeki datalarda herhangi bir değişiklik yapılması gerekmektedir.
5. Eğer kart içerisinde değişiklik yapılmışsa ve kaydetmeden tekrar eski haline getirilmişse kaydet butonu `disabled` olarak kalacak.
6. Eğer kart değişiklik yapıp kaydedildiyse, kaydet butonu tekrar `disabled` olacaktır.
8. `design.png` de görülen tasarım Material UI kullanılarak yapılmıştır, fakat challenge içerisinde tasarım için zorunluluğu yoktur. Tasarıma bu tasarımda bir çalışmanın yapılması beklenilmektedir.

## Notlar
* Tasarım için herhangi bir UI framework kullanılmadı, sadece grid yapısı için bootstrap'in scss dosyalarından grid için gerekli olan SCSS dosyaları import edildi.
* Component'lar tamamen tasarıma uygun şekilde oluşturuldu.
* Base component'ların yanı sıra challenge için gerekli olan component'lar da oluşturuldu ve tasarımları sıfırdan tasarıma uygun şekilde kodlandı.

### Dummy Data

```js
const data = {
    shift: [
        // For monday
        {
            isHoliday: false,
            startHour: 8,
            startMinute: 30,
            finishHour: 18,
            finishMinute: 0
        }
        // Populate this array for other days
    ],
    default: {
        startHour: 8,
        startMinute: 30
    }
}
```

### Tasarım

![Tasarım](https://github.com/alicankahramaner/ambeent-ai-challenge/blob/master/design.png?raw=true)