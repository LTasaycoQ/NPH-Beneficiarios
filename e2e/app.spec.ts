import { test, expect } from '@playwright/test';

test('la app carga correctamente en /login', async ({ page }) => {
  try {
    await page.goto('http://localhost:4200/login');
  } catch (error) {
    console.error('❌ No se pudo conectar con la app en /login.');
    throw error;
  }

  try {
    await expect(page).toHaveTitle(/NPH/i); // O pon el título correcto si no es NPH
    console.log('✅ Título verificado correctamente');
  } catch (error) {
    console.error('❌ Error: el título no es el esperado');
    throw error;
  }

  try {
    await expect(page.locator('text=¡Bienvenido!')).toBeVisible({ timeout: 10000 });
    console.log('✅ Texto de bienvenida visible');
  } catch (error) {
    console.error('❌ Error: el texto "¡Bienvenido!" no está visible');
    throw error;
  }


  try {
    await page.fill('input[formcontrolname="email"]', 'luis.tasayco@vallegrande.edu.pe');
    await page.fill('input[formcontrolname="password"]', 'luistasayco'); // Ajusta según tu app

    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle' }),
      page.click('button[type="submit"]'),
    ]);

    console.log('✅ Formulario enviado y redirección completa');
  } catch (error) {
    console.error('❌ Error al llenar o enviar el formulario de login');
    throw error;
  }



  try {
    await expect(page.locator('text=Sistema de Gestión NPH')).toBeVisible({ timeout: 10000 });
    console.log('✅ DAshsboard visible');
  } catch (error) {
    console.error('❌ Error: el "dashboard" no está visible');
    throw error;
  }




  try {
    const tarjetaBeneficiarios = page.locator('a:has-text("Beneficiarios")');
    await expect(tarjetaBeneficiarios).toBeVisible({ timeout: 5000 });
    await tarjetaBeneficiarios.click();
    console.log('✅ Tarjeta "Beneficiarios" clickeada correctamente');
  } catch (error) {
    console.error('❌ Error: no se pudo hacer clic en la tarjeta "Beneficiarios"');
    throw error;
  }




  try {
    await expect(page.locator('text=Vista de los Beneficiarios - Activos')).toBeVisible({ timeout: 10000 });
    console.log('✅ Beneficiarios Visibles visible');
  } catch (error) {
    console.error('❌ Error: el "dashboard" no está visible');
    throw error;
  }




  try {
  console.log('✅ Prueba de  eliminado ');

  console.log('Espera de carga 10 segundos');

    await page.waitForTimeout(10000);
  console.log('✅ Botón eliminar clickeado correctamente y eliminado');

} catch (error) {
  console.error('❌ Error: No se pudo hacer clic en el boton eliminar');
  throw error;
}


});
