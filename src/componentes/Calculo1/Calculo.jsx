import React, { useState, useEffect } from 'react';
import "../Calculo1/style/calculo.css"

function Calculo() {

  const [devices, setDevices] = useState(() => {
    const storedDevices = JSON.parse(localStorage.getItem('devices')) || [];
    return storedDevices;
  });
  const [deviceName, setDeviceName] = useState('');
  const [devicePower, setDevicePower] = useState('');
  const [deviceUsageHours, setDeviceUsageHours] = useState('');
  const [dailyEnergyUsage, setDailyEnergyUsage] = useState(0);
  const [monthlyEnergyUsage, setMonthlyEnergyUsage] = useState(0);

  const handleDeviceNameChange = (e) => {
    setDeviceName(e.target.value);
  };

  const handleDevicePowerChange = (e) => {
    setDevicePower(parseFloat(e.target.value));
  };

  const handleDeviceUsageHoursChange = (e) => {
    setDeviceUsageHours(parseFloat(e.target.value));
  };

  const handleAddDevice = () => {
    if (deviceName.trim() !== '' && devicePower > 0 && deviceUsageHours > 0) {
      const newDevice = {
        name: deviceName,
        power: devicePower,
        usageHours: deviceUsageHours,
      };
      setDevices([...devices, newDevice]);
      setDeviceName('');
      setDevicePower('');
      setDeviceUsageHours('');
    }
  };

  const calculateDailyEnergyUsage = () => {
    const totalDailyUsage = devices.reduce((total, device) => {
      return total + device.power * device.usageHours;
    }, 0);
    setDailyEnergyUsage(totalDailyUsage);
  };

  const calculateMonthlyEnergyUsage = () => {
    calculateDailyEnergyUsage();
    const totalMonthlyUsage = dailyEnergyUsage * 30; // Estimativa para um mês de 30 dias
    setMonthlyEnergyUsage(totalMonthlyUsage);
  };

  // Atualizar o localStorage sempre que os dispositivos mudarem
  useEffect(() => {
    localStorage.setItem('devices', JSON.stringify(devices));
  }, [devices]);

  return (
    <div className='envolverr'>
      <h2 id="titulo">Calculadora de Consumo de Energia</h2>
      <div id='inputs'>
        <input
          type="text"
          placeholder="Nome do Dispositivo"
          value={deviceName}
          onChange={handleDeviceNameChange}
        />
        <input
          type="number"
          placeholder="Potência (W)"
          value={devicePower}
          onChange={handleDevicePowerChange}
        />
        <input
          type="number"
          placeholder="Horas de Uso Diário"
          value={deviceUsageHours}
          onChange={handleDeviceUsageHoursChange}
        />
        <button onClick={handleAddDevice} id="botao">
          Adicionar Dispositivo
        </button>
      </div>
      <section id='conteudo_list'>
        <h3 id="sub-titulo-cima">Dispositivos Adicionados:</h3>
        <hr />
        <ul id="lista">
          {devices.map((device, index) => (
            <li key={index} id="consumo-lista">
              {device.name} - Consumo Diário: {device.power * device.usageHours} Wh
            </li>
          ))}
        </ul>
        <hr />
        <h3 id="sub-titulo">Consumo Diário Estimado: {dailyEnergyUsage} Wh</h3>
        <h3 id="sub-titulo">Consumo Mensal Estimado: {monthlyEnergyUsage} Wh</h3>
        <div id='botao_baixo_cont'>
          <button id='botao_baixo' onClick={calculateMonthlyEnergyUsage}>
            Calcular Consumo Diario & Mensal
          </button>
        </div>
      </section>
    </div>
  );
}

export default Calculo;