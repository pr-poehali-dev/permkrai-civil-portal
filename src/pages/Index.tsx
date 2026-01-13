import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

type Section = 'home' | 'news' | 'connect' | 'documents' | 'contacts' | 'about';

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const { toast } = useToast();

  const navigationItems = [
    { id: 'home' as Section, label: 'Главная', icon: 'Home' },
    { id: 'news' as Section, label: 'Новости', icon: 'Newspaper' },
    { id: 'connect' as Section, label: 'Подключение', icon: 'Cable' },
    { id: 'documents' as Section, label: 'Документы', icon: 'FileText' },
    { id: 'about' as Section, label: 'О системе', icon: 'Info' },
    { id: 'contacts' as Section, label: 'Контакты', icon: 'Phone' },
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Расширение сети видеонаблюдения в Перми',
      date: '15 декабря 2024',
      excerpt: 'В рамках развития АПК "Безопасный город" установлено 150 новых камер видеонаблюдения в центральных районах Перми.',
      category: 'Развитие инфраструктуры'
    },
    {
      id: 2,
      title: 'Обновление системы аналитики',
      date: '10 декабря 2024',
      excerpt: 'Внедрена новая система интеллектуального анализа видеопотока для автоматического распознавания нештатных ситуаций.',
      category: 'Технологии'
    },
    {
      id: 3,
      title: 'Подключение новых муниципалитетов',
      date: '5 декабря 2024',
      excerpt: 'К Единой системе видеонаблюдения подключились еще 12 населенных пунктов Пермского края.',
      category: 'Расширение системы'
    }
  ];

  const documents = [
    {
      id: 1,
      title: 'Положение о Единой системе видеонаблюдения',
      type: 'PDF',
      size: '2.4 МБ',
      date: '01.09.2024'
    },
    {
      id: 2,
      title: 'Инструкция по подключению для организаций',
      type: 'PDF',
      size: '1.8 МБ',
      date: '15.10.2024'
    },
    {
      id: 3,
      title: 'Технические требования к оборудованию',
      type: 'PDF',
      size: '3.2 МБ',
      date: '20.11.2024'
    },
    {
      id: 4,
      title: 'Соглашение об обработке персональных данных',
      type: 'PDF',
      size: '1.1 МБ',
      date: '01.12.2024'
    }
  ];

  const handleSubmitRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      organization: formData.get('organization'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    console.log('Заявка отправлена:', data);
    
    toast({
      title: "Обращение принято",
      description: "Ваша заявка будет рассмотрена в течение 3 рабочих дней. Номер обращения: #" + Math.floor(Math.random() * 10000),
    });

    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-accent rounded-lg p-2">
                <Icon name="Shield" size={32} className="text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold">АПК "Безопасный город"</h1>
                <p className="text-sm text-primary-foreground/80">Единая система видеонаблюдения Пермского края</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Icon name="MapPin" size={18} />
              <span className="text-sm">Пермь</span>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b shadow-sm sticky top-[88px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className="flex items-center gap-2 whitespace-nowrap"
                onClick={() => setActiveSection(item.id)}
              >
                <Icon name={item.icon} size={18} />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 md:p-12 shadow-xl">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Обеспечиваем безопасность жителей Пермского края
                </h2>
                <p className="text-lg text-white/90 mb-6">
                  Единая система видеонаблюдения объединяет более 5000 камер по всему региону,
                  обеспечивая контроль общественного порядка и оперативное реагирование на инциденты.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={() => setActiveSection('connect')}
                  >
                    <Icon name="Cable" size={20} className="mr-2" />
                    Подключиться к системе
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                    onClick={() => setActiveSection('about')}
                  >
                    Подробнее о системе
                  </Button>
                </div>
              </div>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-scale cursor-pointer">
                <CardHeader>
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Video" size={24} className="text-accent" />
                  </div>
                  <CardTitle>6000+ камер</CardTitle>
                  <CardDescription>Установлено по всему Пермскому краю</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-scale cursor-pointer">
                <CardHeader>
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Users" size={24} className="text-accent" />
                  </div>
                  <CardTitle>24/7 мониторинг</CardTitle>
                  <CardDescription>Круглосуточный контроль безопасности</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-scale cursor-pointer">
                <CardHeader>
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Clock" size={24} className="text-accent" />
                  </div>
                  <CardTitle>30 дней</CardTitle>
                  <CardDescription>Глубина хранения архива записей</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Последние новости</CardTitle>
                <CardDescription>Актуальная информация о развитии системы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {newsItems.slice(0, 2).map((news) => (
                  <div key={news.id} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-lg">{news.title}</h3>
                      <Badge variant="secondary">{news.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{news.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="Calendar" size={14} />
                      {news.date}
                    </div>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setActiveSection('news')}
                >
                  Все новости
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Новости</h2>
              <p className="text-muted-foreground">Актуальная информация о развитии системы видеонаблюдения</p>
            </div>
            
            <div className="grid gap-6">
              {newsItems.map((news) => (
                <Card key={news.id} className="hover-scale cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <Badge variant="secondary">{news.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Calendar" size={16} />
                        {news.date}
                      </div>
                    </div>
                    <CardTitle className="font-heading">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{news.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'connect' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Подключение к системе</h2>
              <p className="text-muted-foreground">Инструкции и форма для подключения вашей организации</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Этапы подключения</CardTitle>
                  <CardDescription>Процесс интеграции занимает 10-14 рабочих дней</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { step: 1, title: 'Подача заявки', desc: 'Заполните форму обращения на портале' },
                    { step: 2, title: 'Техническая экспертиза', desc: 'Специалисты оценят готовность объекта' },
                    { step: 3, title: 'Подписание документов', desc: 'Оформление соглашения о подключении' },
                    { step: 4, title: 'Настройка оборудования', desc: 'Интеграция камер в единую систему' },
                    { step: 5, title: 'Ввод в эксплуатацию', desc: 'Запуск и мониторинг системы' }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Требования к оборудованию</CardTitle>
                  <CardDescription>Минимальные технические характеристики</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <div>
                        <p className="font-medium">Разрешение камер</p>
                        <p className="text-sm text-muted-foreground">Минимум 1920x1080 (Full HD)</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <div>
                        <p className="font-medium">Протокол передачи</p>
                        <p className="text-sm text-muted-foreground">RTSP, ONVIF поддержка</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <div>
                        <p className="font-medium">Канал связи</p>
                        <p className="text-sm text-muted-foreground">Минимум 2 Мбит/с на камеру</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <div>
                        <p className="font-medium">Запись архива</p>
                        <p className="text-sm text-muted-foreground">Локальное хранение 7 дней</p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setActiveSection('documents')}
                  >
                    <Icon name="FileText" size={16} className="mr-2" />
                    Полные технические требования
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Форма обращения</CardTitle>
                <CardDescription>Заполните данные для подключения или получения консультации</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitRequest} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">ФИО представителя *</Label>
                      <Input id="name" name="name" required placeholder="Иванов Иван Иванович" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Организация *</Label>
                      <Input id="organization" name="organization" required placeholder="Название организации" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required placeholder="example@organization.ru" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" name="phone" type="tel" required placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      placeholder="Опишите вашу задачу или вопрос..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить обращение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'documents' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Документы</h2>
              <p className="text-muted-foreground">Нормативные документы и инструкции</p>
            </div>

            <div className="grid gap-4">
              {documents.map((doc) => (
                <Card key={doc.id} className="hover-scale cursor-pointer">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-destructive/10 rounded-lg p-3">
                        <Icon name="FileText" size={24} className="text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{doc.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{doc.type}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{doc.date}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="Download" size={20} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">О системе</h2>
              <p className="text-muted-foreground">Единая система видеонаблюдения Пермского края</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Назначение системы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Единая система видеонаблюдения Пермского края — это комплексное решение в рамках 
                  аппаратно-программного комплекса "Безопасный город", направленное на обеспечение 
                  общественной безопасности, предупреждение правонарушений и оперативное реагирование 
                  на чрезвычайные ситуации.
                </p>
                <Separator />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Target" size={20} className="text-accent" />
                      Основные задачи
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="ChevronRight" size={16} className="mt-0.5 text-accent" />
                        Мониторинг общественных пространств
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ChevronRight" size={16} className="mt-0.5 text-accent" />
                        Контроль дорожной обстановки
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ChevronRight" size={16} className="mt-0.5 text-accent" />
                        Оперативное реагирование на инциденты
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ChevronRight" size={16} className="mt-0.5 text-accent" />
                        Сбор доказательной базы
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Layers" size={20} className="text-accent" />
                      Технологии
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="ChevronRight" size={16} className="mt-0.5 text-accent" />
                        Интеллектуальная видеоаналитика
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ChevronRight" size={16} className="mt-0.5 text-accent" />
                        Распознавание номеров автомобилей
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ChevronRight" size={16} className="mt-0.5 text-accent" />
                        Детектирование аномалий и инцидентов
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="ChevronRight" size={16} className="mt-0.5 text-accent" />
                        Единый центр хранения данных
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="MapPinned" size={24} className="text-accent" />
                  </div>
                  <CardTitle>География</CardTitle>
                  <CardDescription>48 муниципальных образований Пермского края</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Building2" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Объекты</CardTitle>
                  <CardDescription>Школы, больницы, площади, парки, дороги</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Shield" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Безопасность</CardTitle>
                  <CardDescription>Соответствие требованиям ФЗ-152 и ГОСТ</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Контакты</h2>
              <p className="text-muted-foreground">Свяжитесь с нами для получения консультации</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Техническая поддержка</CardTitle>
                  <CardDescription>Вопросы по работе системы и оборудованию</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-medium">Телефон горячей линии</p>
                      <p className="text-lg font-semibold text-accent">8-800-555-35-35</p>
                      <p className="text-sm text-muted-foreground">Круглосуточно, звонок бесплатный</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-accent">support@safecity-perm.ru</p>
                      <p className="text-sm text-muted-foreground">Ответ в течение 24 часов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Административный отдел</CardTitle>
                  <CardDescription>Вопросы подключения и документации</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Building" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground">
                        614000, г. Пермь, ул. Ленина, д. 51<br/>
                        Офис 301
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-medium">Часы работы</p>
                      <p className="text-muted-foreground">
                        Пн-Пт: 09:00 - 18:00<br/>
                        Сб-Вс: выходной
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Быстрая связь</CardTitle>
                <CardDescription>Отправьте нам сообщение, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitRequest} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Ваше имя *</Label>
                      <Input id="contact-name" name="name" required placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input id="contact-email" name="email" type="email" required placeholder="ivan@example.ru" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Ваш вопрос *</Label>
                    <Textarea 
                      id="contact-message" 
                      name="message" 
                      required 
                      placeholder="Опишите ваш вопрос..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" size={24} />
                <span className="font-heading font-bold">АПК "Безопасный город"</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Единая система видеонаблюдения Пермского края
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Быстрые ссылки</h3>
              <div className="space-y-2 text-sm">
                <button onClick={() => setActiveSection('home')} className="block hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                  Главная
                </button>
                <button onClick={() => setActiveSection('connect')} className="block hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                  Подключение
                </button>
                <button onClick={() => setActiveSection('documents')} className="block hover:underline text-primary-foreground/80 hover:text-primary-foreground">
                  Документы
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Контакты</h3>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>Тел: 8-800-555-35-35</p>
                <p>Email: support@safecity-perm.ru</p>
                <p>г. Пермь, ул. Ленина, 51</p>
              </div>
            </div>
          </div>
          <Separator className="my-6 bg-primary-foreground/20" />
          <div className="text-center text-sm text-primary-foreground/60">
            © 2024 АПК "Безопасный город". Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;