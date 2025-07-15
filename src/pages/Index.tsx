import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Видеонаблюдение",
      description: "Установка и настройка систем видеонаблюдения любой сложности. IP-камеры, аналоговые системы, удаленный доступ.",
      icon: "Camera",
      features: ["IP-камеры высокого разрешения", "Удаленный мониторинг", "Архивирование данных", "Ночное видение"]
    },
    {
      title: "Локальные сети",
      description: "Проектирование и монтаж структурированных кабельных систем. Настройка сетевого оборудования.",
      icon: "Network",
      features: ["Структурированные кабельные системы", "Wi-Fi сети", "Серверные стойки", "Сетевая безопасность"]
    },
    {
      title: "LED экраны и интерактивы",
      description: "Светодиодные экраны для рекламы и информации. Интерактивные решения для бизнеса.",
      icon: "Monitor",
      features: ["Уличные LED экраны", "Интерактивные панели", "Системы управления контентом", "Видеостены"]
    },
    {
      title: "Охранные системы и умный дом",
      description: "Комплексные решения безопасности. Системы умного дома и видеодомофоны.",
      icon: "Shield",
      features: ["Охранно-пожарная сигнализация", "Контроль доступа", "Умный дом", "Видеодомофоны"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">BLACK INSTALL</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Получить консультацию
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">ПРОФЕССИОНАЛЬНЫЙ</span><br />
              ЭЛЕКТРОМОНТАЖ
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Комплексные решения в области видеонаблюдения, сетевых технологий, 
              LED-систем и безопасности для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary text-lg px-8 py-3">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по электромонтажу и установке современных технологических решений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon name={service.icon} size={24} className="text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-secondary group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Icon name="CheckCircle" size={16} className="text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 group-hover:bg-secondary transition-all duration-300">
                    Узнать подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">Профессиональный подход к каждому проекту</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Award",
                title: "15+ лет опыта",
                description: "Более 500 успешно реализованных проектов"
              },
              {
                icon: "Users",
                title: "Команда экспертов",
                description: "Сертифицированные специалисты высокой квалификации"
              },
              {
                icon: "Clock",
                title: "Быстрое выполнение",
                description: "Соблюдение сроков и качественное выполнение работ"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Icon name={item.icon} size={32} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы начать ваш проект?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Получите бесплатную консультацию и расчет стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (XXX) XXX-XX-XX
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-3">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" size={28} className="text-primary" />
                <span className="text-xl font-bold">BLACK INSTALL</span>
              </div>
              <p className="text-gray-300 mb-4">
                Профессиональные услуги электромонтажа и установки современного оборудования
              </p>
              <div className="flex space-x-4">
                <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">г. Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Видеонаблюдение</li>
                <li>Локальные сети</li>
                <li>LED экраны</li>
                <li>Охранные системы</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+7 (XXX) XXX-XX-XX</li>
                <li>info@blackinstall.ru</li>
                <li>Пн-Пт: 9:00-18:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Black Install. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;