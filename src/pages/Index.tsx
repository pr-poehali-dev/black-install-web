import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Видеонаблюдение",
      description: "Установка и настройка систем видеонаблюдения любой сложности. IP-камеры, аналоговые системы, удаленный доступ.",
      icon: "Camera",
      features: ["IP-камеры высокого разрешения", "Удаленный мониторинг", "Архивирование данных", "Ночное видение"],
      image: "/img/81d069bf-9892-4bd8-b99c-8feba168dd55.jpg"
    },
    {
      title: "Локальные сети",
      description: "Проектирование и монтаж структурированных кабельных систем. Настройка сетевого оборудования.",
      icon: "Network",
      features: ["Структурированные кабельные системы", "Wi-Fi сети", "Серверные стойки", "Сетевая безопасность"],
      image: "/img/311f5811-3746-40ec-a4b7-a85596099bfb.jpg"
    },
    {
      title: "LED экраны и интерактивы",
      description: "Светодиодные экраны для рекламы и информации. Интерактивные решения для бизнеса.",
      icon: "Monitor",
      features: ["Уличные LED экраны", "Интерактивные панели", "Системы управления контентом", "Видеостены"],
      image: "/img/81b27212-fc10-4cd5-acd4-12ceaf300576.jpg"
    },
    {
      title: "Охранные системы и умный дом",
      description: "Комплексные решения безопасности. Системы умного дома и видеодомофоны.",
      icon: "Shield",
      features: ["Охранно-пожарная сигнализация", "Контроль доступа", "Умный дом", "Видеодомофоны"],
      image: "/img/81d069bf-9892-4bd8-b99c-8feba168dd55.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-sm border-b border-border/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Icon name="Zap" size={28} className="text-primary" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                <span className="text-primary">BLACK</span> INSTALL
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
              <Icon name="Phone" size={16} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-secondary/50 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Icon name="Sparkles" size={16} className="text-primary mr-2" />
              <span className="text-sm text-primary font-medium">Профессиональный электромонтаж</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-foreground">ТЕХНОЛОГИИ</span><br />
              <span className="text-primary bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                БУДУЩЕГО
              </span><br />
              <span className="text-foreground">СЕГОДНЯ</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Комплексные решения в области видеонаблюдения, сетевых технологий, 
              LED-систем и безопасности для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 shadow-2xl shadow-primary/30 group">
                <Icon name="Phone" size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                Заказать звонок
                <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/10 hover:border-primary">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Icon name="Wrench" size={16} className="text-primary mr-2" />
              <span className="text-sm text-primary font-medium">Наши услуги</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Полный спектр <span className="text-primary">решений</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Профессиональные услуги по электромонтажу и установке современных технологических решений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 group/btn transition-all duration-300">
                    Узнать подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-r from-card/20 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Icon name="Star" size={16} className="text-primary mr-2" />
              <span className="text-sm text-primary font-medium">Преимущества</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Почему выбирают <span className="text-primary">нас</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Профессиональный подход к каждому проекту
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Award",
                title: "15+ лет опыта",
                description: "Более 500 успешно реализованных проектов",
                number: "500+"
              },
              {
                icon: "Users",
                title: "Команда экспертов",
                description: "Сертифицированные специалисты высокой квалификации",
                number: "24/7"
              },
              {
                icon: "Clock",
                title: "Быстрое выполнение",
                description: "Соблюдение сроков и качественное выполнение работ",
                number: "100%"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-300 border border-primary/20">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-lg px-2 py-1 text-xs font-bold">
                    {item.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-12 shadow-2xl">
            <Icon name="Rocket" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Готовы к <span className="text-primary">запуску</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Получите бесплатную консультацию и расчет стоимости вашего проекта
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 shadow-lg shadow-primary/30 group">
                <Icon name="Phone" size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                +7 (XXX) XXX-XX-XX
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/10 hover:border-primary group">
                <Icon name="Mail" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Написать email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <span className="text-xl font-bold text-foreground">
                  <span className="text-primary">BLACK</span> INSTALL
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Профессиональные услуги электромонтажа и установки современного оборудования
              </p>
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Услуги</h4>
              <ul className="space-y-3">
                {["Видеонаблюдение", "Локальные сети", "LED экраны", "Охранные системы"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Контакты</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} className="text-primary" />
                  <span className="text-muted-foreground">+7 (XXX) XXX-XX-XX</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} className="text-primary" />
                  <span className="text-muted-foreground">info@blackinstall.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} className="text-primary" />
                  <span className="text-muted-foreground">Пн-Пт: 9:00-18:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/20 pt-8 text-center">
            <p className="text-muted-foreground">
              &copy; 2024 <span className="text-primary">Black Install</span>. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;